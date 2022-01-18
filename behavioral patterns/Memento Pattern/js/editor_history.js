class EditorHistory {
  textEditorStates = [];

  push(textEditorState) {
    this.textEditorStates.push(textEditorState);
  }

  remove() {
    this.textEditorStates.pop();

    if (this.textEditorStates.length > 0)
      return this.textEditorStates[this.textEditorStates.length - 1];
  }
}

module.exports = EditorHistory;
