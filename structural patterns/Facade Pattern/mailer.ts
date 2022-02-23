import SmtpService from "./smtp_service";
import HtmlFormatter from "./html_formatter";

export default class Mailer {
  _mail: string;
  _htmlFormatter: HtmlFormatter;
  _smtpService: SmtpService;

  constructor(mail: string) {
    this._mail = mail;
    this._htmlFormatter = new HtmlFormatter();
    this._smtpService = new SmtpService();
  }

  send() {
    this._smtpService.send(this._htmlFormatter.format(this._mail));
  }
}
