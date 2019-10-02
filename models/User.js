const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    _id: {
        type: String
    },
    email: {
        type: String,
        requied: true
    },
    isMail: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);