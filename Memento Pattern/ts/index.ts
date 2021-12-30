
import TextEditor from './text_editor';
import EditorHistory from './editor_history';
import TextEditorState from './text_editor_state';


const editor = new TextEditor()
const history = new EditorHistory()

history.add(editor.addState(new TextEditorState("first stateg sbsjdsgn s")))
history.add(editor.addState(new TextEditorState("first s")))
history.all()
history.remove()
console.log(editor.currentState)
history.all()


history.remove()
history.all()
console.log(editor.currentState)
