const sgMail = require("@sendgrid/mail");

const sendGridApiKey =
  "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";
  
module.exports = function(email){

  
  sgMail.setApiKey(sendGridApiKey);
  
    sgMail.send({
    to: `${email}`,
    from: "lucky32815@gmail.com",
    subject: "Welcome!",
    text: "WELCOME TO PINTREACH!",
    html: "<h1>WELCOME TO PINTREACH!</h1> <br/> <h2>The place for Research!</h2>",
  });
  
}