import {exampleMenus, view} from "./data.ts";
import './styles/styles.css';
import {fillMenuListButton} from "./dom-utils.ts";

view();

// Calls on exampleMenus(); function to save example menus in local storage
fillMenuListButton.addEventListener("click", function () {
    exampleMenus();
    view();
});