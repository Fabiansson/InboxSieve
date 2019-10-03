const express = require('express');
const router = express.Router();

// @route   POST api/inbox
// @desc    HTTP handler for messages from mailgun
// @access  public
router.post('/',(req, res) => {
    console.log("REQ Sender: ");
    console.log(req.get('sender'));
    console.log("REQ BODY: ");
    console.log(req.body);
    console.log("REQ JSON: ");
    console.log(JSON.stringify(req.body));
    const sender = req.body.sender;
    const recipient = req.body.recipient;

    console.log(sender);
    console.log(recipient);

    res.json({success: true});
});


module.exports = router;