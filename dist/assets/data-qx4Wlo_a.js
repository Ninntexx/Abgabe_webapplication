(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=document.querySelector("#addMenu"),m=document.querySelector("#result"),f=document.querySelector("#findButton"),g=document.querySelector(".fillMenuListButton"),n=document.querySelector("#clearList"),o=document.querySelector("#menuTable");u();function w(i){localStorage.getItem("form")||localStorage.setItem("form","[]");let t=JSON.parse(localStorage.getItem("form"));t.push(i),localStorage.setItem("form",JSON.stringify(t))}function d(){if(o.innerHTML="",localStorage.getItem("form")!=null){const i=JSON.parse(localStorage.getItem("form")),t=document.querySelector("tbody")||document.createElement("tbody");i.forEach((s,a)=>{const e=document.createElement("tr");e.innerHTML=`
            <td>${s.meal}</td>
            <td>${s.description}</td>
            <td><img src="${s.image}" alt=""></td>
            <td><a href="${s.recipe}">Link</a></td>
            <td id="deleteButton"><button id="${a}"><img src="/trash.svg" alt="löschen"></button></td>
        `,t.appendChild(e)}),n.style.display="",o.appendChild(t),i.forEach((s,a)=>{document.getElementById(`${a}`).addEventListener("click",function(){h(a),d()})}),i.length===0&&l()}else l()}function l(){n.style.display="none";const i=document.createElement("tr");i.innerHTML=`
            <td class="emptyMenuList">Eine gähnende Leere, füge zuerst Gerichte hinzu!</td>
            <td class="emptyMenuList"><img src="/giphy.gif" alt=""></td>
        `,o.appendChild(i)}function h(i){let t=JSON.parse(localStorage.getItem("form"));t.splice(i,1),localStorage.setItem("form",JSON.stringify(t))}function u(){n&&n.addEventListener("click",function(){localStorage.clear(),d()})}function b(){localStorage.setItem("form",JSON.stringify([{meal:"Sushi",description:"Sushi ist eine japanische Spezialität, die aus gekochtem Reis und rohem oder gekochtem Fisch besteht, der oft mit Nori (gerösteter Seetang) umwickelt wird.",image:"https://assets.zuckerjagdwurst.com/62utca52nr9qv140h85vb7cihmud/1110/701/55/true/center/R849-Horl-Sushiplatte-113.jpg?animated=false",recipe:"https://www.reishunger.de/rezepte/rezept/1268/klassisches-maki-sushi-und-inside-out-rolls"},{meal:"Pizza",description:"Teig, Tomatensauce, Mozzarella-Käse und Salami, gebacken und gewürzt nach Geschmack.",image:"https://www.daskochrezept.de/sites/daskochrezept.de/files/styles/full_width_tablet_4_3/public/2021-05/pizza_salami.jpg?h=21272edb&itok=ipXn2R5l",recipe:"https://www.daskochrezept.de/rezepte/pizza-salami-wie-vom-italiener"},{meal:"Spaghetti Carbonara",description:"Spaghetti, Eiern, geriebenem Pecorino oder Parmesan, Pancetta oder Speck und frisch gemahlenem schwarzen Pfeffer.",image:"https://img.chefkoch-cdn.de/rezepte/1491131254215808/bilder/1377867/crop-960x720/spaghetti-carbonara.jpg",recipe:"https://www.chefkoch.de/rezepte/1491131254215808/Spaghetti-Carbonara.html"},{meal:"Dampfnudeln",description:"Hefeteig, Vanillesoße oder Bratensauce.",image:"https://www.sanella.de/-/media/Project/Upfield/MultiBrand/Sanella-new/Assets/Recipes/Recipe-Sync-Img/eb2c1fa1-abb9-4b47-8221-a877584b903e.jpg?rev=ad6449de948b4b089026a2eb2fa68d96&w=1600",recipe:"https://www.einfachbacken.de/rezepte/dampfnudeln-omas-einfaches-grundrezept"},{meal:"Leberknödel",description:"Leberknödel, Sauerkraut, Kartoffelbrei, Soße und Brot.",image:"https://i.ytimg.com/vi/skir6K_Gabs/maxresdefault.jpg",recipe:"https://www.pinterest.de/pin/495044184010902793/"},{meal:"Hähnchen mit Reis",description:"Hähnchengeschnetzeltes, Reis, Frühlingszwiebel, Champignons, Knoblauch.",image:"https://www.eatbetter.de/sites/eatbetter.de/files/styles/full_width_tablet_4_3/public/2021-11/haehnchengeschnetzeltes_mit_reis_1.jpg?h=4521fff0&itok=SqpUY3of",recipe:"https://www.eatbetter.de/rezepte/haehnchengeschnetzeltes-mit-reis-so-cremig-lecker"},{meal:"Tacos",description:"Tacos sind mexikanische Maistortillas, die mit einer Vielzahl von Zutaten gefüllt werden, darunter Fleisch, Gemüse, Käse, und Soßen.",image:"https://www.ruegenwalder.de/website/rezepte/vegan/282/image-thumb__282__recipe-detail-stage/bunt-gefuellte-tacos-mit-veganem-hack.jpg",recipe:"https://www.chefkoch.de/rezepte/2529881396467471/Hackfleisch-Tacos.html"},{meal:"Ratatouille",description:"Ratatouille ist ein provenzalisches Gemüsegericht, das aus Zucchini, Auberginen, Paprika, Tomaten, Zwiebeln und Knoblauch zubereitet wird.",image:null,recipe:"https://emmikochteinfach.de/ratatouille-rezept-einfach-aus-dem-ofen/"},{meal:"Currywurst",description:"Currywurst ist eine deutsche Imbiss-Spezialität, bestehend aus einer mit Currypulver gewürzten Bratwurst, serviert mit einer Sauce aus Ketchup und Currypulver.",image:"https://img.chefkoch-cdn.de/rezepte/304621110745012/bilder/1542396/crop-960x720/currysauce-fuer-currywurst.jpg",recipe:"https://www.chefkoch.de/rezepte/304621110745012/Currysauce-fuer-Currywurst.html"},{meal:"Gyros mit Tzatziki",description:"Gyros ist griechisches mariniertes Fleisch, oft Schweinefleisch, serviert mit Tzatziki (Joghurtsauce mit Gurken und Knoblauch), dazu passt Fladenbrot und Salat.",image:null,recipe:"https://www.kochbar.de/rezept/447137/Gyros-mit-Tzatziki-Rosmarinkartoffeln-und-Krautsalat.html"},{meal:"Lachsfilet mit Ofengemüse",description:"Lachsfilet wird mit einer Kräuter-Zitronen-Marinade mariniert und zusammen mit verschiedenen Gemüsesorten wie Paprika, Zucchini und Kartoffeln im Ofen gegart.",image:"https://img.chefkoch-cdn.de/rezepte/3790311578436069/bilder/1274596/crop-960x720/lachs-auf-ofengemuese.jpg",recipe:"https://www.chefkoch.de/rezepte/2687151421399069/Low-Carb-Lachs-mit-Ofengemuese.html"},{meal:"Moussaka",description:"Moussaka ist ein griechisches Auflaufgericht mit Schichten aus Auberginen, Hackfleisch, Kartoffeln und einer cremigen Bechamelsauce.",image:"https://www.einfachkochen.de/sites/einfachkochen.de/files/styles/full_width_tablet_4_3/public/2021-07/griechische_moussaka_1_0.jpg?h=a1e1a043&itok=4TYacUGz",recipe:"https://www.einfachkochen.de/rezepte/griechische-moussaka-das-original-rezept-mit-kartoffeln"},{meal:"Bibimbap",description:"Bibimbap ist ein koreanisches Reisgericht, das mit verschiedenen Gemüsesorten, mariniertem Fleisch, einem Spiegelei und scharfer Gochujang-Soße serviert wird.",image:"https://www.eatbetter.de/sites/eatbetter.de/files/styles/full_width_tablet_4_3/public/2022-02/bibimbap-quer-1140_bea.jpg?h=a1e1a043&itok=4VSFE-cD",recipe:"https://www.eatbetter.de/rezepte/bibimbap-so-einfach-selbst-machen"},{meal:"Osso Buco",description:"Osso Buco ist ein italienisches Schmorgericht, das aus geschmorten Kalbshaxenscheiben mit Gemüse, Wein und Brühe zubereitet wird.",image:null,recipe:"https://www.essen-und-trinken.de/rezepte/56560-rzpt-ossobuco"},{meal:"Pho",description:"Pho ist eine vietnamesische Nudelsuppe, die aus einer würzigen Brühe, Reisnudeln, dünn geschnittenem Rindfleisch oder Hühnchen, Kräutern und verschiedenen Gewürzen besteht.",image:"https://www.eatbetter.de/sites/eatbetter.de/files/styles/full_width_tablet_4_3/public/2021-12/11-pho-bo-5688-quer.jpg?h=935f78ac&itok=yhdVi_wc",recipe:"https://www.eatbetter.de/rezepte/pho-bo-die-schnelle-einfache-nudelsuppe"},{meal:"Paella",description:"Paella ist ein spanisches Reisgericht, das mit Safran gewürzt und mit Meeresfrüchten, Hühnchen, Gemüse und Bohnen zubereitet wird.",image:"https://image.livingathome.de/12858546/t/w4/v2/w960/r1/-/lah201306080-paella-jpg--41174-.jpg",recipe:"https://www.livingathome.de/kochen-feiern/rezepte/10567-rzpt-rezept-paella"}]))}export{p as a,g as b,b as e,f,m as r,w as s,d as v};
