import MarkupState from "./markup_state";

export default class Markup {
    private _currentState: MarkupState;
    private _content: string = "";

    constructor(currentState: MarkupState) {
        this._currentState = currentState;
    }

    setContent(content: string) {
        this._content = content
    }

    changeState(newState: MarkupState) {
        this._currentState = newState
    }

    render() {
        this._currentState.render(this._content)
    }
}