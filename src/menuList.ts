import { menuTable } from "./dom-utils.ts";
import './styles/styles.css';

updateTable();
// function to update the table with new data
export function updateTable() {

    // take data from local storage
    const storedMenu = localStorage.getItem("form");
    if (storedMenu) {
        const menu = JSON.parse(localStorage.getItem("form") as string);

        // add a new Row in Table
        const tbody = document.querySelector('tbody') || document.createElement('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${menu.meal}</td>
            <td>${menu.description}</td>
            <td><img src="${menu.image}" alt="${menu.meal}"></td>
        `;
        tbody.appendChild(newRow);
        menuTable.appendChild(tbody);
    }
}



