class TextEditor {
  currentEditorState;

  restore(textEditorState) {
    this.currentEditorState = textEditorState;
  }

  addtextEditorState(textEditorState) {
    this.currentEditorState = textEditorState;

    return textEditorState;
  }
}

module.exports = TextEditor;
