import { page1, page2, modal, addMenu } from './dom-utils';
import { isMenu } from './interface';
import './styles/styles.css';

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
        <label for="imageUpload">Bild einfügen</label>
        <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
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

        // event listeners to close modal
        //const cancelButton: HTMLButtonElement = document.querySelector('#page1-cancel') as HTMLButtonElement;
        //cancelButton.addEventListener('click', closeModal);

        // add event listener to submit button
        const nextButton= document.querySelector('#next') as HTMLInputElement;
        form.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            const form: HTMLFormElement = document.querySelector('#page1') as HTMLFormElement;
            const formData: FormData = new FormData(form);


            // save formData to local storage, then close modal
            const meal = formData.get('meal') as string;
            const description = formData.get('description') as string;

            const newMenu = {
                meal: meal,
                description: description,
            };

            localStorage.setItem('form', JSON.stringify(newMenu));

            //close the modal
            closeModal();
        });
});
