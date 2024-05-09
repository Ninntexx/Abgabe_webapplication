import{a as s,s as p,f as h,r as o,b as g,e as f}from"./data-qx4Wlo_a.js";function c(){document.querySelector("#modal").remove()}s.addEventListener("click",function(){const t=document.createElement("div");t.id="modal";const e=document.createElement("form");e.innerHTML=`
        <h3>Gericht hinzufügen</h3>
        <label for="meal">Gericht</label>
        <input type="text" id="meal" name="meal" placeholder="Sushi" required>
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
    `,e.id="page1",t.appendChild(e),document.body.appendChild(t),document.querySelector("#cancelMenu").addEventListener("click",c),e.addEventListener("submit",function(i){i.preventDefault();const d=document.querySelector("#page1"),a=new FormData(d),l=a.get("meal"),r=a.get("description"),u=a.get("imageUpload"),m=a.get("recipe");p({meal:l,description:r,image:u,recipe:m}),c()})});function b(t,e){return Math.floor(Math.random()*(e-t)+t)}h.addEventListener("click",function(){o.innerHTML="";let t=JSON.parse(localStorage.getItem("form"));if(!t||t.length===0){const e=document.createElement("h3");e.id="noMenu",e.textContent="Du hast noch kein Gericht hinzugefügt!",o.appendChild(e),setTimeout(()=>{e.remove()},1500)}else{const e=b(0,t.length),n=t[e],i=document.createElement("div");i.id="menuOutput",i.innerHTML=`
    <img id="imageOutput" src="${n.image||"/chef.png"}" alt="${n.image?"Menu Image":"Chef Image"}">
    <h2 id="menuText">${n.meal}</h2>
    <a href="${n.recipe}">${n.recipe}</a>
    <p id="descriptionOutput">${n.description}</p>`,o.appendChild(i)}});g.addEventListener("click",function(){f()});
