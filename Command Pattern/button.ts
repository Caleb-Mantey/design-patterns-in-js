import ICommand from './i_command';

export default class Button {
    _command: ICommand;

    constructor(command: ICommand) {
        this._command = command;
    }

    click() {
        this._command.execute()
    }
}