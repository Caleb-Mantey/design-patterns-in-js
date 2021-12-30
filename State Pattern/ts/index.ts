
import Markup from './markup';
import HtmlState from './html_state';
import XMLState from './xml_state';
import JsonState from './json_state';


const markUp = new Markup(new HtmlState())
markUp.setContent("hello kwame mintah you are doing well.")
markUp.render()
markUp.changeState(new XMLState())
markUp.render()
markUp.changeState(new JsonState())
markUp.render()