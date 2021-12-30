
import MarkupState from "./markup_state";

export default class XMLState extends MarkupState {


    render(content: string): void {
        content = `<xml:div>${content}</xml:div>`

        console.log("***********RENDERING XML CONTENT***********")
        console.log(content)
        console.log("********************************************")
    }
}