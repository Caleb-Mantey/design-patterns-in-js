
import Button from './button';
import CreateUserCommand from './create_user_command';
import User from './user';
import SendEmailCommand from './send_email_command';
import CompositeCommands from './composite';


const user = new User("caleb", 24)
const userCommand = new CreateUserCommand(user)
const emailCommand = new SendEmailCommand(user)

const composite = new CompositeCommands()
composite.addCommands(userCommand);
composite.addCommands(emailCommand);

const btn = new Button(composite)
btn.click()