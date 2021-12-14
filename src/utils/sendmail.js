const trasnprter = require("../configs/mail");
module.exports = (from, to, subject, text, html) => {
  const message = {
    from,
    to,
    subject,
    text,
    html,
  };
  trasnprter.sendMail(message, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};
