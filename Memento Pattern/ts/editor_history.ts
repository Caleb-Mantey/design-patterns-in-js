import TextEditorState from './text_editor_state';

export default class EditorHistory {
    _editorStates: Array<TextEditorState> = [];

    add(editorState: TextEditorState) {
        this._editorStates?.push(editorState)
    }

    remove() {
        this._editorStates.pop()

        if (this._editorStates.length > 0) return this._editorStates[this._editorStates.length - 1]

    }

    all() {
        console.log(this._editorStates)
    }

}