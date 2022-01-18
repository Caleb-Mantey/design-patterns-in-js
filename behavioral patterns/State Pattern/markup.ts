import IMarkupState from "./markup_state";

export default class Markup {
    private _currentState: IMarkupState;
    private _content: string = "";

    constructor(currentState: IMarkupState) {
        this._currentState = currentState;
    }

    setContent(content: string) {
        this._content = content
    }

    changeState(newState: IMarkupState) {
        this._currentState = newState
    }

    render() {
        this._currentState.render(this._content)
    }
}