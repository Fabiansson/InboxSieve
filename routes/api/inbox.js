const express = require('express');
const router = express.Router();

// @route   POST api/inbox
// @desc    HTTP handler for messages from mailgun
// @access  public
router.post('/',(req, res) => {
    const sender = req.body.sender;
    const recipient = req.body.recipient;

    console.log(sender);
    console.log(recipient);

    res.status(200);
});


module.exports = router;