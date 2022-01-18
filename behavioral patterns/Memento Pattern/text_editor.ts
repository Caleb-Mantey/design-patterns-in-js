
import TextEditorState from './text_editor_state';

export default class TextEditor {
    currentState: TextEditorState | undefined;


    addState(editorState: TextEditorState) {
        this.currentState = editorState

        return editorState
    }

    restoreState(editorState: TextEditorState) {
        this.currentState = editorState
    }
}