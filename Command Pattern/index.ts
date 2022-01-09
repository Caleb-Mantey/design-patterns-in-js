
import Button from './button';
import CreateUserCommand from './create_user_command';
import ICommand from './i_command';
import User from './user';
import SendEmailCommand from './send_email_command';


const user = new User("caleb", 24)
const userCommand = new CreateUserCommand(user)
const btn = new Button(userCommand)
btn.click()

const emailCommand = new SendEmailCommand(user)
const btn1 = new Button(emailCommand)
btn1.click()