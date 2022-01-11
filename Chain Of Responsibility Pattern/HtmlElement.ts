import Rendrer from './rendrer';

export default class HtmlElement extends Rendrer {
    _content: string = "";
    _tag: string;

    constructor(next: Rendrer | undefined, tag: string) {
        super(next)
        this._tag = tag;
    }

    setContent(content: string) {
        this._content = content;
    }

    render(): void {
        console.log(`<${this._tag}> Rendering Item ${this._content} </${this._tag}>`)
    }

}