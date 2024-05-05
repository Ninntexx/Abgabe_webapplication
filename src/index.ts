import { addMenu, result , find, fillMenuListButton } from './dom-utils';
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
        <input type="url" id="imageUpload" name="recipe" placeholder="Bild URL einfügen"> 
        <label for="recipe">Rezept hinterlegen</label>
        <input type="url" id="recipe" name="recipe" placeholder="Rezept URL einfügen">
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
            const recipeAdd = formData.get('recipe') as string;

             const newMenu: IsMenu = {
                meal: mealAdd,
                description: descriptionAdd,
                image: imageUpload,
                recipe: recipeAdd
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
        const menuOutput = document.createElement('div');
        menuOutput.id = 'menuOutput';
        menuOutput.innerHTML = `
        <img id="imageOutput" src="public/chef.png" alt=public/chef.webp>
        <h2 id="menuText">${menuShow.meal}</h2>
        <a href="${menuShow.recipe}">${menuShow.recipe}</a>
        <p id="descriptionOutput">${menuShow.description}</p>`;
        result.appendChild(menuOutput);
    }

})

fillMenuListButton.addEventListener("click", function (){
    localStorage.setItem('form', JSON.stringify([
        {meal: "Sushi", description: "Sushi ist eine japanische Spezialität, die aus gekochtem Reis und rohem oder gekochtem Fisch besteht, der oft mit Nori (gerösteter Seetang) umwickelt wird.", image: null, recipe: "https://www.reishunger.de/rezepte/rezept/1268/klassisches-maki-sushi-und-inside-out-rolls"},
        {meal: "Pizza", description: "Teig, Tomatensauce, Mozzarella-Käse und Salami, gebacken und gewürzt nach Geschmack.", image: null, recipe: "https://www.daskochrezept.de/rezepte/pizza-salami-wie-vom-italiener"},
        {meal: "Spaghetti", description: "Spaghetti, Eiern, geriebenem Pecorino oder Parmesan, Pancetta oder Speck und frisch gemahlenem schwarzen Pfeffer.", image: null, recipe: "https://www.chefkoch.de/rezepte/1491131254215808/Spaghetti-Carbonara.html"},
        {meal: "Dampfnudeln", description: "Hefeteig, Vanillesoße oder Bratensauce.", image: null, recipe: "https://www.einfachbacken.de/rezepte/dampfnudeln-omas-einfaches-grundrezept"},
        {meal: "Leberknödel", description: "Leberknödel, Sauerkraut, Kartoffelbrei, Soße und Brot.", image: null, recipe: "https://www.pinterest.de/pin/495044184010902793/"},
        {meal: "Hähnchen mit Reis", description: "Hähnchengeschnetzeltes, Reis, Frühlingszwiebel, Champignons, Knoblauch.", image: null, recipe: "https://www.eatbetter.de/rezepte/haehnchengeschnetzeltes-mit-reis-so-cremig-lecker"},
        {meal: "Tacos", description: "Tacos sind mexikanische Maistortillas, die mit einer Vielzahl von Zutaten gefüllt werden, darunter Fleisch, Gemüse, Käse, und Soßen.", image: null, recipe: "https://www.chefkoch.de/rezepte/2529881396467471/Hackfleisch-Tacos.html"},
        {meal: "Ratatouille", description: "Ratatouille ist ein provenzalisches Gemüsegericht, das aus Zucchini, Auberginen, Paprika, Tomaten, Zwiebeln und Knoblauch zubereitet wird.", image: null, recipe: "https://emmikochteinfach.de/ratatouille-rezept-einfach-aus-dem-ofen/"},
        {meal: "Currywurst", description: "Currywurst ist eine deutsche Imbiss-Spezialität, bestehend aus einer mit Currypulver gewürzten Bratwurst, serviert mit einer Sauce aus Ketchup und Currypulver.", image: null, recipe: "https://www.chefkoch.de/rezepte/304621110745012/Currysauce-fuer-Currywurst.html"},
        {meal: "Gyros mit Tzatziki", description: "Gyros ist griechisches mariniertes Fleisch, oft Schweinefleisch, serviert mit Tzatziki (Joghurtsauce mit Gurken und Knoblauch), dazu passt Fladenbrot und Salat.", image: null, recipe: "https://www.kochbar.de/rezept/447137/Gyros-mit-Tzatziki-Rosmarinkartoffeln-und-Krautsalat.html"},
        {meal: "Lachsfilet mit Ofengemüse", description: "Lachsfilet wird mit einer Kräuter-Zitronen-Marinade mariniert und zusammen mit verschiedenen Gemüsesorten wie Paprika, Zucchini und Kartoffeln im Ofen gegart.", image: null, recipe: "https://www.chefkoch.de/rezepte/2687151421399069/Low-Carb-Lachs-mit-Ofengemuese.html"},
        {meal: "Moussaka", description: "Moussaka ist ein griechisches Auflaufgericht mit Schichten aus Auberginen, Hackfleisch, Kartoffeln und einer cremigen Bechamelsauce.", image: "https://www.einfachkochen.de/sites/einfachkochen.de/files/styles/full_width_tablet_4_3/public/2021-07/griechische_moussaka_1_0.jpg?h=a1e1a043&itok=4TYacUGz", recipe: "https://www.einfachkochen.de/rezepte/griechische-moussaka-das-original-rezept-mit-kartoffeln"},
        {meal: "Bibimbap", description: "Bibimbap ist ein koreanisches Reisgericht, das mit verschiedenen Gemüsesorten, mariniertem Fleisch, einem Spiegelei und scharfer Gochujang-Soße serviert wird.", image: null, recipe: "https://www.eatbetter.de/rezepte/bibimbap-so-einfach-selbst-machen"},
        {meal: "Osso Buco", description: "Osso Buco ist ein italienisches Schmorgericht, das aus geschmorten Kalbshaxenscheiben mit Gemüse, Wein und Brühe zubereitet wird.", image: null, recipe: "https://www.essen-und-trinken.de/rezepte/56560-rzpt-ossobuco"},
        {meal: "Pho", description: "Pho ist eine vietnamesische Nudelsuppe, die aus einer würzigen Brühe, Reisnudeln, dünn geschnittenem Rindfleisch oder Hühnchen, Kräutern und verschiedenen Gewürzen besteht.", image: null, recipe: "https://www.eatbetter.de/rezepte/pho-bo-die-schnelle-einfache-nudelsuppe"},
        {meal: "Paella", description: "Paella ist ein spanisches Reisgericht, das mit Safran gewürzt und mit Meeresfrüchten, Hühnchen, Gemüse und Bohnen zubereitet wird.", image: null, recipe: "https://www.livingathome.de/kochen-feiern/rezepte/10567-rzpt-rezept-paella"}
    ]))
})



