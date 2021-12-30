
import MarkupState from "./markup_state"

export default class JsonState extends MarkupState {

    render(content: string) {
        content = JSON.parse(`{ "div": "${content}"}`)

        console.log("***********RENDERING JSON CONTENT***********")
        console.log(content)
        console.log("********************************************")
    }
}