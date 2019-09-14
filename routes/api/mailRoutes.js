const express = require('express');
const router = express.Router();

// MailRoute Model
const MailRoute = require('../../models/MailRoute');

// @route   GET api/mailRoutes
// @desc    Get All Items
// @access  public
router.get('/',(req, res) => {
    MailRoute.find()
        .sort({ owner: -1 })
        .then(items => res.json(items))
});

module.exports = router;