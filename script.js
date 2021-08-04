

const pateikti = document.querySelector(".pateikti");

const vardas = document.querySelector("#vardas");
const pavarde = document.querySelector("#pavarde");
const gimimoMatai = document.querySelector("#gimimoMatai");
const gimimoMenesis = document.querySelector("#gimimoMenesis");
const gimimoDiena = document.querySelector("#gimimoDiena");
const alga = document.querySelector("#alga");



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
    addZmogus(zmogus) {
        zmogus {
            zmogus.vardas = vardas.value,
            zmogus.pavarde = pavarde.value,
            zmogus.gimimoData = gimimoMatai.value + "-" + gimimoMenesis.value + "-" + gimimoDiena.value,
            zmogus.alga = alga.value
        }
        
    }

    vardas.value = '';
    pavarde.value = '';
    gimimoMatai.value = '';
    gimimoMenesis.value = '';
    gimimoDiena.value = '';
    alga.value = '';
}

pateikti.addEventListener('click', pateiktiClick);