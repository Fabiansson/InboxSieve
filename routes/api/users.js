const express = require('express');
const router = express.Router();
const { admin, checkIfAuthenticated } = require('../../service/firebase');
const mailgun = require('../../service/mailgun').mailgun;

// MailRoute Model
const User = require('../../models/User');

// @route   GET api/users
// @desc    Get All Users
// @access  public
router.get('/',(req, res) => {
    User.find()
        .sort({ email: -1 })
        .then(users => res.json(users))
});

// @route   POST api/users
// @desc    Create A User
// @access  public
router.post('/',(req, res) => {
    const newUser = new User({
        _id: req.body.firebaseID,
        email: req.body.email,
        isMail: req.body.isMail
    });

   /* admin.auth().createUser({
        email: newUser.email,
        password: newUser.password,
        displayName: newUser.isMail
    })
    .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        newUser.save().then(user => res.json(user));
        console.log('Successfully created new user:', userRecord.uid);
      })
      .catch(function(error) {
        console.log('Error creating new user:', error);
      });*/
      newUser.save().then(user => {
        mailgun.post('/routes', {
            "priority": 10,
            "description": 'HomeRoute',
            "expression": `match_recipient("${req.body.isMail}")`,
            "action": [
                `forward("${req.body.email}")`,
                'forward("https://immense-wave-84291.herokuapp.com/api/inbox")',
                'stop()'
            ]}, 
            function (error, body) {
                if (error) console.log(error);
                console.log(body);
                res.json(user);
            });
      })
});

// @route   DELETE api/users/:id
// @desc    Deleta A User
// @access  private
router.delete('/:id', checkIfAuthenticated, (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;