import { IsMenu } from './interface.ts';
import {menuTable} from "./dom-utils.ts";

export function save(newMenu: IsMenu){

    // if there is nothing saved at the start then save an empty array
    if(!localStorage.getItem("form")){
        localStorage.setItem('form', '[]');
    }

    // get old data and save it to the new data
    let old_data: Array<IsMenu> = JSON.parse(localStorage.getItem('form')as string);
    old_data.push(newMenu);

    // save old + new data to local storage
    localStorage.setItem('form', JSON.stringify(old_data));

}

export function view(){
    // if there is indeed data then continue
    if(localStorage.getItem('form') != null){
        const menu: IsMenu[] = JSON.parse(localStorage.getItem('form')as string);
        const tbody = document.querySelector('tbody') || document.createElement('tbody');
        menu.forEach((menu: IsMenu, index: number) =>{
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${menu.meal}</td>
            <td>${menu.description}</td>
            <td><img src="${menu.image}" alt="${menu.meal}"></td>
            <td><button id="${index}">löschen</button></td>
        `;
            tbody.appendChild(newRow);
        })
        menuTable.appendChild(tbody);
        menu.forEach((_menu: IsMenu, index: number)=>{
            const button = document.getElementById(`${index}`) as HTMLButtonElement;
            button.addEventListener('click', function(){
                deleteMenu(index);
                location.reload();
            });
        })
    }
}

export function deleteMenu (index: number) {
    let data: Array<IsMenu> = JSON.parse(localStorage.getItem('form')as string);
    data.splice(index,1);
    localStorage.setItem('form', JSON.stringify(data));
}


