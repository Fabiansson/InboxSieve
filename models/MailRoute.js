const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MailRouteSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = MailRoute = mongoose.model('mailroute', MailRouteSchema);