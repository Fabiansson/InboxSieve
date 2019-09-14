const express = require('express');
const router = express.Router();

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
        email: req.body.email,
        password: req.body.password,
        isMail: req.body.isMail
    });

    newUser.save().then(user => res.json(user));
});

// @route   DELETE api/users/:id
// @desc    Deleta A User
// @access  public
router.delete('/:id',(req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;