import ICommand from './i_command';
import User from './user';


export default class SendEmailCommand implements ICommand {
    _user: User;

    constructor(user: User) {
        this._user = user
    }

    execute(): void {
        this._user.sendEmail();
    }

}