
export default class TextEditorState {
    text: string

    constructor(text: string) {
        this.text = text
    }

    getText() {
        return this.text
    }
}