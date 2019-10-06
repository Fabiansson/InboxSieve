const express = require('express');
const router = express.Router();
const { checkIfAuthenticated } = require('../../service/firebase');

// MailRoute Model
const MailRoute = require('../../models/MailRoute');

const mailgun = require('../../service/mailgun').mailgun;

// @route   GET api/mailRoutes
// @desc    Get all MailRoutes from uid
// @access  private
router.get('/:uid', (req, res) => {
    MailRoute.find({ owner: req.params.uid })
    .then(result => {
        console.log(result);
        res.json(result);
    })
});

// @route   PUT api/mailRoutes/:id
// @desc    Update A MailRoute
// @access  private
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    //TODO: Activate/Deactivate in DB
    /*MailRoute.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));*/
    
    //Stop/Activate on Mailgun

    if(req.body.activate){
        console.log('activating route');
        MailRoute.findOne({ _id: req.params.id })
            .then(route => {
                User.findOne({ _id: route.owner })
                    .then(user => {
                        console.log('user email is: ' + user.email);
                        mailgun.put('/routes/' + req.params.id, { "action": [`forward('${user.email}')`, 'stop()'] }, function (error, body) {
                            console.log(body);
                            route.active = true;
                            route.save()
                                .then(route => {
                                    res.json({msg: 'activated successfully'});
                                })
                        });
                    })
            })
    } else {
        console.log('deactivating route');
        mailgun.put('/routes/' + req.params.id, { "action": 'stop()' }, function (error, body) {
            console.log(body);
            MailRoute.findOneAndUpdate({ _id: req.params.id }, { active: false})
                .then(route => {
                    res.json(body);
                })
        });
    }
    
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