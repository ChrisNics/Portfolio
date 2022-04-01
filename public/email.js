const pug = require("pug");
const nodemailer = require("nodemailer");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(email) {
    this.to = email;
    // this.url = url;
    this.from = `Christian Nicolas <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/${template}.pug`, {
      subject,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendHire() {
    await this.send("hire", "Thank you for Hiring Me!");
  }
};
