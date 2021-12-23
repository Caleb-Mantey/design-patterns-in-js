# Design Patterns
Design patterns are good and helps us to keep our project organized. Maintaining software projects is very hard and it is important we follow some set of rules to keep our code readable and easily maintainable.
One fundmental software principle is the __SOLID PRINCIPLE__ which is ussually refered to the as *the first five principles of object oriented design*. This principle was formulated by _Robert C. Martin_ (also known as **Uncle Bob**)


### SOLID
Solid principles helps in reducing tight coupling between classes in our code. Tight coupling is when a group of classes highly depend on one another. Loose coupling is the opposite of tight coupling and this approach makes our code more reusable, readable, flexible, stable and maintainable. It is advisable to avoid tight coupling as much as possible and always make your code loosely coupled.

**SOLID** stands for
- S - Single Responsibility Principle
- O - Open-closed Principle
- L - Liskov Substitution Principle
- I - Interface Segregation Principle
- D - Dependency Inversion Principle
  
Now lets break each of the principles down and get a better understanding of each of these principles.

#### Single Responsibility Principle
Single responsibility principle states that
> A class should have one and only one responsibility. Which means your class should have only one job.

Consider this example
You have a mailer class that connects takes an email processes and sends the email as either text or html. Now Lets see what this class does to get the job done.
```javascript
    class Mailer{
        constructor(mail){
            this.mail = mail
            this.smtpService = smtp_service_connection()
        }

        function smtp_service_connection(){
            // Connects to smtp service
        }

        function send(){
            this.smtpService.send(this.format_text_mail())
             this.smtpService.send(this.format_html_mail())
        }

        function format_text_mail(){
            // formats text version of mail
        }

        function format_html_mail(){
            // formats html version of mail
        }
    }
```

This code does not follow the single responsibility principle  the mailer class is responsible for doing all the following
- Connects to an smtp service
- Format the mail in text format
- Format the mail in html format
- Sending the mail

This will make the `Mailer` class very difficult to maintain. Let's say for example we want to change the smpt provider we are using we will have to come into this class and do some changes to the `smtp_service_connection` method and this can get tricky and messy if the new provider does'nt implement a `send` method but a `deliver` method then we will have to also come and change this line ` this.smtpService.send(this.format_html_mail())` in our `send` method to ` this.smtpService.deliver(this.format_html_mail())`. All these is a result of the fact that our class is not performing only one functionality.


##### Better Approach
A more better approach is seen below where we divide all the task into seperate classes. We now have the following.
- A class that connects to the smtp service
- A class that formats our mail in text
- A class that formats our mail in html
- A class responsible for sending the mailer

You can see now the code looks better and our smtp service can be changed easily in only one class which does not affect the other parts of mailing systems behaviour. The Mailer class takes an instance of an smtp service and only sends a mail (__NOTE:__ `It is performing one and only one job to send mail`)

Also our `HtmlFormatter` and `TextFormatter` are doing just one thing formating the mail in the right format.

#### Mailer
```javascript
    class Mailer{
        constructor(mail, mailerFormats){
            this.mail = mail
            this.mailerFormats = mailerFormats
            this.smtpService = new MailerSmtpService()
        }

        function send(){
            // Loops through mail formats and calls the send method
            this.mailerFormats.forEach((formater) => this.smtpService.send(formater.format(this.mail)))
        }
    }
```
#### MailerSmtpService
```javascript
    class MailerSmtpService{
        constructor(){
           this.smtp_con = smtp_service_connection()
        }

        function send (mail){
            this.smtp_con.send(mail)
            // can also be this.smtp_con.deliver(mail)
        }

        function smtp_service_connection(){
            // Connects to smtp service
        }
    }
```

#### HtmlFormatter
```javascript
    class HtmlFormatter{
        constructor(){
        }

        function format(mail){
             // sends html version of mail
        }
    }
```

#### TextFormatter
```javascript
    class TextFormatter{
        constructor(){
        }

        function format(mail){
             // sends text version of mail
        }
    }
```

Now we can send an email by simply doing this 
```javascript
    const mailer = new Mailer("hello kwame", [new HtmlFormatter(), new TextFormatter()])
    mailer.send();
```