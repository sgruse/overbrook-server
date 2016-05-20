'use strict';

var nodeMailer = require('nodemailer');
var transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'info.overbrook@gmail.com',
    pass: 'overbrook425'
  }
});

module.exports = (apiRouter) => {
  apiRouter.route('/email')
    .post((req, res) => {
      var mailOptions = {
        from: req.body.email,
        to: '<heyduckd@gmail.com>',
        sender: req.body.name,
        subject: 'Email from Overbook contact form',
        text: req.body.message
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) return error;
        res.json({msg: 'Email has been sent'});
      });
    });
}
