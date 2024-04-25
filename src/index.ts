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
        <input type="submit" id="next" value="weiter">
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

            const form2 = document.createElement('form');
            form2.innerHTML = `
                <h3>Gericht hinzufügen</h3>
                <label for="season">Season</label>
                <select id="season" required>
                    <option value="unabhängig">unabhängig</option>
                    <option value="Sommer">Sommer</option>
                    <option value="Winter">Winter</option>
                </select>

                <label for="diet">Diät</label>
                <select id="diet" required>
                    <option value="Vegitarisch">Vegitarisch</option>
                    <option value="Fleisch">Fleisch</option>
                    <option value="Fisch">Fisch</option>
                </select>
    
                <label for="menu">Menü</label>
                <select id="menu" required>
                    <option value="Beilage">Beilage</option>
                    <option value="Hauptgericht">Hauptgericht</option>
                    <option value="Nachtisch">Nachtisch</option>
                </select>
    
                <fieldset>
                  <legend>Geschmack:</legend>
                  <input type="radio" id="normal" name="taste" value="normal">
                  <label for="normal">Normal</label>
                  <input type="radio" id="sweet" name="taste" value="süß">
                  <label for="sweet">Süß</label>
                </fieldset>
    
                <fieldset>
                  <legend>Temperatur:</legend>
                  <input type="radio" id="hot" name="temperature" value="warm">
                  <label for="hot">Warm</label>
                  <input type="radio" id="cold" name="temperature" value="kalt">
                  <label for="cold">Kalt</label>
                </fieldset>
    
                <fieldset>
                  <legend>Gesundheit:</legend>
                  <input type="radio" id="healthy" name="health" value="gesund">
                  <label for="healthy">Gesund</label>
                  <input type="radio" id="unhealthy" name="health" value="ungesund">
                  <label for="unhealthy">Ungesund</label>
                </fieldset>
                <input type="submit" id="addToMenuList" value="hinzufügen">
            `;
            form2.id = 'page2';
            form.remove();
            modal.appendChild(form2);
            form2.addEventListener('submit', function(event){
                event.preventDefault();
                // save formData to local storage, then close modal
                const form2: HTMLFormElement = document.querySelector('#page2') as HTMLFormElement;
                const form2Data: FormData = new FormData(form2);

                const meal = formData.get('meal') as string;
                const description = formData.get('description') as string;
                const seasonSelect = document.getElementById('season') as HTMLSelectElement;
                const season = seasonSelect.value;
                const dietSelect = document.getElementById('diet') as HTMLSelectElement;
                const diet = dietSelect.value;
                const menuSelect = document.getElementById('menu') as HTMLSelectElement;
                const menu = menuSelect.value;
                const selectedTasteRadio = form2.querySelector('input[name="taste"]:checked') as HTMLInputElement;
                const selectedTaste = selectedTasteRadio ? selectedTasteRadio.value : '';
                const selectedTemperatureRadio = form2.querySelector('input[name="temperature"]:checked') as HTMLInputElement;
                const selectedTemperature = selectedTemperatureRadio ? selectedTemperatureRadio.value : '';
                const selectedHealthRadio = form2.querySelector('input[name="health"]:checked') as HTMLInputElement;
                const selectedHealth = selectedHealthRadio ? selectedHealthRadio.value : '';

                const newMenu = {
                    meal: meal,
                    description: description,
                    season: season,
                    diet: diet,
                    menu: menu,
                    taste: selectedTaste,
                    temperature: selectedTemperature,
                    healthy: selectedHealth
                };

                localStorage.setItem('form', JSON.stringify(newMenu));

                //close the modal
                closeModal();
            });
        });

});