// import { zmones } from "./zmones.js";

const pateikti = document.querySelector(".pateikti");
const delete1 = document.querySelector(".delete");

const vardas = document.querySelector("#vardas");
const pavarde = document.querySelector("#pavarde");
const gimimoMatai = document.querySelector("#gimimoMatai");
const gimimoMenesis = document.querySelector("#gimimoMenesis");
const gimimoDiena = document.querySelector("#gimimoDiena");
const alga = document.querySelector("#alga");

// 1 <= gimimoMenesis.value && gimimoMenesis.value <= 12;

// if (gimimoMenesis.value === 2) {
//     1 <= gimimoDiena.value && gimimoDiena.value <= 29;
// } else {
//     1 <= gimimoDiena.value && gimimoDiena.value <= 31;
// };



function parodytiZmones() {
    const list = getZmones();
    const div = document.getElementById("sarasas");
    let str = "<ul>";
    for (const zmogus of list) {
        str += "<li>" + zmogus.vardas + " " + zmogus.pavarde + "</li>";
    }
    str += "</ul>";
    div.innerHTML = str;
};

function addZmogusForma() {
    const div = document.getElementById("sarasas");
    div.nextSibling.remove
    div.append(document.createTextNode("Vardas:"));
    div.append(document.createElement("br"));
    let inputElement = document.createElement("input");
    inputElement.id = "vardas";
    div.append(inputElement);
    div.append(document.createTextNode("Pavarde:"));
    let inputElement = document.createElement("input");
    inputElement.id = "pavarde";
    div.append(inputElement);
    div.append(document.createElement("br"));
    div.append(document.createTextNode("Gimimo diena:"));
    let inputElement = document.createElement("input");
    inputElement.id = "gimimoDiena";
    inputElement.type = "date";
    div.append(inputElement);
    div.append(document.createElement("br"));
    div.append(document.createTextNode("Alga:"));
    let inputElement = document.createElement("input");
    inputElement.id = "alga";
    inputElement.type = "number";
    div.append(inputElement);
    div.append(document.createElement("br"));
    let saveButton = document.createElement("button");
    saveButton.append(document.createTextNode("Save"));
    div.append(saveButton);
    let saveButton = document.createElement("button");
    cancelButton.append(document.createTextNode("Cancel"));
    cancelButton.onclick = parodytiZmones;
    div.append(cancelButton);
}

function saveZmogus() {
    const vardas = document.getElementById("vardas").value;
    const pavarde = document.getElementById("pavarde").value;
    const gimimoData = document.getElementById("gimimoDiena").value;
    const alga = document.getElementById("alga").value;
    const naujasZmogus = {
        
    }
}

function clearNode(node) {
    while (node.firstElementChild) {
        node.nfirstElementChild.remove();
    }
}




function pateiktiClick() {
    zmones.push({
        id: nextId.value,
        vardas: vardas.value,
        pavarde: pavarde.value,
        gimimoData: gimimoMatai.value + "-" + gimimoMenesis.value + "-" + gimimoDiena.value,
        alga: alga.value  
    })

    nextId += 1;

    vardas.value = '';
    pavarde.value = '';
    gimimoMatai.value = '';
    gimimoMenesis.value = '';
    gimimoDiena.value = '';
    alga.value = '';
}

function IstrintiClick() {
    nextId -= 1;
}

pateikti.addEventListener('click', pateiktiClick);
delete1.addEventListener('click', IstrintiClick);

