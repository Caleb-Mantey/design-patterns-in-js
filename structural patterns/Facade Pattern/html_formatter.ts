export default class HtmlFormatter {
  constructor() {}

  format(mail: string): string {
    // sends html version of mail
    mail = `<html>
      <head><title>Email For You</title></head>
      <body>${mail}</body>
      </html>`;

    return mail;
  }
}
