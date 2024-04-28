import { addMenu, result , find } from './dom-utils';
import { IsMenu } from './interface';
import './styles/styles.css';
import {save} from "./data.ts";

function closeModal() {
    const modal = document.querySelector('#modal') as HTMLDivElement;
    modal.remove();
}
addMenu.addEventListener("click", function() {
        // create a modal
        const modal = document.createElement('div');
        modal.id = 'modal';
        const form = document.createElement('form');
        form.innerHTML = `
        <h3>Gericht hinzufügen</h3>
        <label for="meal">Gericht</label>
        <input type="text" id="meal" name="meal" placeholder="Sushi" required>
        <!--<input type="file" id="imageUpload" name="imageUpload" accept="image/*">-->
        <label for="imageUpload">Bild hinterlegen</label>
        <input type="url" id="imageUpload" name="imageUpload" placeholder="Bild URL einfügen">
        <label for="description">Beschreibung</label>
        <textarea id="description" name="description" placeholder="Sushi: Reis, Fisch, Gemüse – traditionell japanisch." rows="6" cols="50"></textarea>
        <div class="menuAddButtons">
              <button id="cancelMenu">Abbrechen</button>
              <input type="submit" id="submitMenu" value="Hinzufügen">
        </div>
    `;
        form.id = 'page1';

        modal.appendChild(form);
        document.body.appendChild(modal);

        // event listener to close modal
        const cancelButton = document.querySelector('#cancelMenu') as HTMLButtonElement;
        cancelButton.addEventListener('click', closeModal);

        // event listener to submit button
        const nextButton= document.querySelector('#next') as HTMLInputElement;
        form.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            const form = document.querySelector('#page1') as HTMLFormElement;
            const formData: FormData = new FormData(form);


            // save formData to local storage, then close modal
            const mealAdd = formData.get('meal') as string;
            const descriptionAdd = formData.get('description') as string;
            const imageUpload = formData.get('imageUpload') as string;

             const newMenu: IsMenu = {
                meal: mealAdd,
                description: descriptionAdd,
                image: imageUpload
            };

            save(newMenu);
            closeModal();
        });
});

// generates a random number within the array range
function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

// displays a random meal from menuList
find.addEventListener('click', function ()  {
    result.innerHTML="";
    let data: Array<IsMenu> = JSON.parse(localStorage.getItem('form')as string);
    if(!data || data.length === 0){
        const noMenu = document.createElement('h3');
        noMenu.id = 'noMenu';
        noMenu.textContent = 'Du hast noch kein Gericht hinzugefügt!';
        result.appendChild(noMenu);
        setTimeout(() => {
            noMenu.remove();
        }, 1500);
        }
    else{
        const index = getRandom(0, data.length)
        const menuShow: IsMenu = data[index];
        console.log(menuShow);
        const menuOutput = document.createElement('div');
        menuOutput.id = 'menuOutput';
        menuOutput.innerHTML = `
        <img id="imageOutput" src="public/chef.png" alt=public/chef.webp>
        <h2 id="menuText">${menuShow.meal}</h2>
        <p id="descriptionOutput">${menuShow.description}</p>`;

        result.appendChild(menuOutput);
    }

})




