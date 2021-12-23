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
> A class should have one and only one        responsibility. Which means your class should have only one job.

Consider this example
You have a mailer class that connects to an smtp service, takes an email processes and sends the email as either text or html. Now Lets see what this class does to get the job done.

```javascript
    class Mailer{
        constructor(mail){
            this.mail = mail
            this.smtpService = this.smtp_service_connection()
        }

        smtp_service_connection(){
            // Connects to smtp service
        }

        send(){
            this.smtpService.send(this.format_text_mail())
             this.smtpService.send(this.format_html_mail())
        }

        format_text_mail(){
            // formats to text version of mail
            this.mail = "Email For You \n" + this.mail;

            return this.mail;
        }

        format_html_mail(){
            // formats to html version of mail
             this.mail = `<html>
            <head><title>Email For You</title></head>
            <body>${this.mail}</body>
            </html>`;

            return this.mail;
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
- A class that connects to the smtp service (TextFormatter)
- A class that formats our mail in text (MailerSmtpService)
- A class that formats our mail in html (HtmlFormatter)
- A class responsible for sending the mailer (Mailer)

You can see now the code looks better and our smtp service can be changed easily in only one class which does not affect the other parts of the mailing systems behaviour. If we use a new smtp service and it implements a `deliver` method instead of a `send` method then we only have to change one method (we change `this.smtp_con.send(mail)` to `this.smtp_con.deliver(mail)`) in the `MailerSmtpService` class. This will not affect other parts of our application and our app will still function properly. The Mailer class takes an instance of an smtp service and only sends a mail (__NOTE:__ `It is performing one and only one job to send mail`)

Also our `HtmlFormatter` and `TextFormatter` are doing just one thing formating the mail in the right format.

#### Mailer
```javascript
    class Mailer{
        constructor(mail, mailerFormats){
            this.mail = mail
            this.mailerFormats = mailerFormats
            this.smtpService = new MailerSmtpService()
        }

        send(){
            // Loops through mail formats and calls the send method
            this.mailerFormats.forEach((formater) => this.smtpService.send(formater.format(this.mail)))
        }
    }
```
#### MailerSmtpService
```javascript
    class MailerSmtpService{
        constructor(){
           this.smtp_con = this.smtp_service_connection()
        }

        send (mail){
            this.smtp_con.send(mail)
            // can easily change to be this if a service requires this implementation - smtp_con.deliver(mail)
        }

        smtp_service_connection(){
            // Connects to smtp service
        }
    }
```

#### HtmlFormatter
```javascript
    class HtmlFormatter{
        constructor(){
        }

        format(mail){
             // formats to html version of mail
              mail = `<html>
            <head><title>Email For You</title></head>
            <body>${mail}</body>
            </html>`;

            return mail;
        }
    }
```

#### TextFormatter
```javascript
    class TextFormatter{
        constructor(){
        }

        format(mail){
             // formats to text version of mail
             mail = "Email For You \n" + mail;

            return mail;
        }
    }
```

Now we can send an email by simply doing this 
```javascript
    const mailer = new Mailer("hello kwame", [new HtmlFormatter(), new TextFormatter()])
    mailer.send();
```

#### Open-closed Principle
> This priciple states that a class must be open for extension but close for modification.

This princple focus on the fact that the class must be easily extended without changing the contents of the class. If we follow this principle well we can actually change the behaviour of our class without ever touching any original piece of code. This also means if a Developer named Fred works on f a certain feature and another Developer named Kwame wants to add some changes, then Kwame should be able to that easily by extending on the features Fred has already provided.

Lets take an example from our `MailerSmtpService` class in the first example and lets make it support this principle.

#### MailerSmtpService - ( Initial )
This is our initial implementation for the `MailerSmtpService`. Nothing fancy here yet
```javascript
    class MailerSmtpService{
        constructor(){
           this.smtp_con = this.smtp_service_connection()
        }

        send (mail){
            this.smtp_con.send(mail)
            // can also be this.smtp_con.deliver(mail)
        }

        smtp_service_connection(){
            // Connects to smtp service
        }
    }
```

#### MailerSmtpService - ( Enhanced )
To support the open-closed principle we remove the `smtp_service_connection` method from our `MailerSmtpService` class and rather we pass the method through a constructor method, then in a subclass (`PostMarkSmtpService` and `SendGridSmtpService`) that inherits from `MailerSmtpService` we call the `constructor` method of the base class with `super(() => {})` and we pass a method which handles the smtp connection depending on smtp provider in use.

```javascript
    class MailerSmtpService{
        constructor(smtp_connection){
           this.smtp_con = smtp_connection()
        }

        send (mail){
            this.smtp_con.send(mail)
        }
    }
```


#### PostMarkSmtpService
```javascript
    class PostMarkSmtpService extends MailerSmtpService {
        constructor(){
           super(() => {
                // Connects to postmark smtp service
            })
        }

        send (mail){
            this.smtp_con.send(mail)
            // can also be this.smtp_con.deliver(mail)
        }
    }
```


#### SendGridSmtpService
```javascript
    class SendGridSmtpService extends MailerSmtpService {
        constructor(){
            super(() => {
                // Connects to sendgrid smtp service
            })
        }

        send (mail){
            this.smtp_con.send(mail)
            // can also be this.smtp_con.deliver(mail)
        }
    }
```


In our mailer class we can now create a new `PostMarkSmtpService` or `SendGridSmtpService` in our app and we can easily keep extending to support different smtp service.

```javascript
    class Mailer{
        constructor(mail, mailerFormats){
            this.mail = mail
            this.mailerFormats = mailerFormats
            this.smtpService = new PostMarkSmtpService()
            // OR this.smtpService = new SendGridSmtpService()

        }

        send(){
            // Loops through mail formats and calls the send method
            this.mailerFormats.forEach((formater) => this.smtpService.send(formater.format(this.mail)))
        }
    }
```

With this implementaion a developer can keep extending the `MailerSmtpService` to support more mailing service without modifying the existing logic in the `MailerSmtpService`.