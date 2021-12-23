class MailerSmtpService {
  constructor(smtp_connection) {
    this.smtp_con = smtp_connection();
  }

  send(mail) {
    this.smtp_con.send(mail);
  }
}

module.exports = MailerSmtpService;
