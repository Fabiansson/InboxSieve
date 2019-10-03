const express = require('express');
const router = express.Router();

// MailRoute Model
const MailRoute = require('../../models/MailRoute');

const mailgun = require('../../service/mailgun').mailgun;

// @route   PUT api/mailRoutes/:id
// @desc    Update A MailRoute
// @access  private
router.put('/:id',(req, res) => {
    //TODO: Activate/Deactivate in DB
    /*MailRoute.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));*/
    
    //Stop/Activate on Mailgun
    mailgun.put('/routes/' + req.params.id, { "action": 'stop()' }, function (error, body) {
        res.json(body);
    });
    //TODO: Activate on Mailgun
});

// @route   DELETE api/mailRoutes/:id
// @desc    Deleta A Route
// @access  private
router.delete('/:id',(req, res) => {
    //TODO: Delete in DB
    /*MailRoute.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));*/
    
    //Delete on Mailgun
    mailgun.delete('/routes/' + req.params.id, function (error, body) {
        res.json(body);
    });

});

module.exports = router;