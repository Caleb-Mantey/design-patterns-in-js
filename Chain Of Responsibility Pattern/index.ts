import HtmlElement from "./HtmlElement";




const h2 = new HtmlElement(undefined, "h2")
const h1 = new HtmlElement(h2, "h1")
h1.setContent("Welcome Onboard")
h2.setContent("This is up");
const div = new HtmlElement(h1, "div")
div.setContent("Document will render");

div.doRendering()