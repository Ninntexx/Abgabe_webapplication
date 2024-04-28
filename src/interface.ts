export interface IsMenu {
    meal: string;
    image?: string;
    description?: string;
}

let isMenu: Array<IsMenu> = [];
export function addMenuToMenuList (item: IsMenu){
    isMenu.push(item);
}

export function getMenuList(){
    return [...isMenu];
}