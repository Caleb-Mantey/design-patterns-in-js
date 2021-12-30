const EditorHistory = require("./editor_history");
const TextEditor = require("./text_editor");
const TextEditorState = require("./text_editor_state");

const myTextEditor = new TextEditor();
const editorHistory = new EditorHistory();

editorHistory.push(
  myTextEditor.addtextEditorState(new TextEditorState("the test"))
);
editorHistory.push(
  myTextEditor.addtextEditorState(new TextEditorState("the memento"))
);
editorHistory.push(
  myTextEditor.addtextEditorState(new TextEditorState("the pattern"))
);
editorHistory.push(
  myTextEditor.addtextEditorState(new TextEditorState("the memento pattern"))
);

console.log(editorHistory.textEditorStates);
console.log(myTextEditor.currentEditorState);
myTextEditor.restore(editorHistory.remove());
console.log(myTextEditor.currentEditorState);
console.log(editorHistory.textEditorStates);
