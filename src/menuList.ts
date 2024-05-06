import {exampleMenus, view} from "./data.ts";
import './styles/styles.css';
import {fillMenuListButton} from "./dom-utils.ts";

view();

fillMenuListButton.addEventListener("click", function () {
    exampleMenus();
    view();
});