function parodytiZmones() {
    const list = getZmones();
    const div = document.getElementById("sarasas");
    clearNode(div);
    const listEl = cocument.createElement("ul")
    for (const zmogus of list) {
        listItem.append(document.createTextNode(zmogus.vardas));
        listItem.append(document.createTextNode(zmogus.pavarde));
        listItem.append(document.createTextNode(zmogus.gimimoData));
        listItem.append(document.createTextNode(zmogus.alga));
        listItem.onclick = showZmogusForma;
        listEl.append(listaItem);
    }
    
    div.append(listEl);
};

function showZmogusForma() {

}

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



