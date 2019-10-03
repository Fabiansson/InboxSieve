const express = require('express');
const router = express.Router();
const mailgun = require('../../service/mailgun').mailgun;

const User = require('../../models/User');
const MailRoute = require('../../models/MailRoute');

// @route   POST api/inbox
// @desc    HTTP handler for messages from mailgun
// @access  public
router.post('/', (req, res) => {
    const sender = req.body.sender;
    const recipient = req.body.recipient;

    

    User.findOne({ 'isMail': recipient }).then(user => {
        if (user) {
            mailgun.post('/routes', {
                "priority": 1,
                "description": 'CustomRoute',
                "expression": `match_recipient("${recipient}") and match_header("from","(.*)${sender}(.*)")`,
                "action": [
                    `forward("${user.email}")`,
                    'stop()'
                ]}, 
                function (error, body) {
                    if (error) return res.status(400).json({ msg: 'Creating route failed.'});
                    console.log(body);

                    const newMailRoute = new MailRoute({
                        _id: body.route.id,
                        owner: user._id,
                        to: recipient,
                        from: sender
                    });

                    newMailRoute.save().then(route => {
                        res.json({msg: 'Mail got processed and routes got created.'});
                    })
            });
        }

        else return res.status(400).json({ msg: 'No user with this recipient adress found.' });
    });
});


module.exports = router;