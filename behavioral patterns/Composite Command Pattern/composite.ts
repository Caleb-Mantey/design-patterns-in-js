import ICommand from './i_command';

export default class CompositeCommands implements ICommand {
    _commands: ICommand[] = [];

    addCommands(command: ICommand) {
        this._commands.push(command)
    }

    execute(): void {
        this._commands.forEach(command => {
            command.execute()
        });
    }

}