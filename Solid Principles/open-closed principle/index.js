const Mailer = require("./mailer");
const HtmlFormatter = require("../single-responsibility principle/html_formatter");
const TextFormatter = require("../single-responsibility principle/text_formatter");

const mailer = new Mailer("hello kwame", [
  new HtmlFormatter(),
  new TextFormatter(),
]);
mailer.send();
