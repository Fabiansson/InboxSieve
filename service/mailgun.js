const DOMAIN = require('../config/keys').DOMAIN;
const HOST = require('../config/keys').HOST;
const APIKEY = require('../config/keys').APIKey;

var mailgun = require('mailgun-js')({
    apiKey: APIKEY,
    domain: DOMAIN,
    host: HOST
});

function createRoute(filter, action, options, cb) {
    var options = options || {};
    var prio = options.priority || 0;
    var description = options.description || '';

    mailgun.post('/routes', { "priority": prio, "description": description, "expression": filter, "action": action }, function (error, body) {
        if (error) cb(error);
        cb(body);
    });
}

module.exports = {
    createRoute
}