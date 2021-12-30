import MarkupState from "./markup_state";


export default class HtmlState extends MarkupState {


    render(content: string): void {
        content = `<div>${content}</div>`

        console.log("***********RENDERING HTML CONTENT***********")
        console.log(content)
        console.log("********************************************")
    }
}