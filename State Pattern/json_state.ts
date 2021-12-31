
import IMarkupState from "./markup_state"

export default class JsonState implements IMarkupState {

    render(content: string) {
        content = JSON.parse(`{ "div": "${content}"}`)

        console.log("***********RENDERING JSON CONTENT***********")
        console.log(content)
        console.log("********************************************")
    }
}