export default class SmtpService {
  smtp_con;

  constructor() {
    this.smtp_con = this.smtp_service_connection();
  }

  send(mail: string): void {
    console.log("Sending Mail");
    console.log(mail);
  }

  smtp_service_connection(): void {
    // Connects to smtp service
    console.log("Connecting to smtp service");
  }
}
