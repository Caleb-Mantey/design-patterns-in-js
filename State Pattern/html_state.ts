import IMarkupState from "./markup_state";


export default class HtmlState implements IMarkupState {


    render(content: string): void {
        content = `<div>${content}</div>`

        console.log("***********RENDERING HTML CONTENT***********")
        console.log(content)
        console.log("********************************************")
    }
}