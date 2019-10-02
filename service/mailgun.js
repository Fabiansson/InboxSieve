var mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    host: process.env.MAILGUN_HOST
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