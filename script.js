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

}

pateikti.addEventListener('click', pateiktiClick);
delete1.addEventListener('click', IstrintiClick);

