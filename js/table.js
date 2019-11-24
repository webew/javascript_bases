let xhrTable = new XMLHttpRequest();

xhrTable.open("get", "datas/datas.json",true);

xhrTable.addEventListener("load",function(evt){
    console.log(this.response);
    let table = makeTable(this.response);
    console.log(table);
    let body = document.querySelector("body");
    body.appendChild(table);
});

xhrTable.send();

function makeTable(datas){
    let jsonDatas = JSON.parse(datas)

    let table = document.createElement("table");

    let tHead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let thHead1 = document.createElement("th");
    thHead1.textContent = "Nom";
    let thHead2 = document.createElement("th");
    thHead2.textContent = "Prénom";
    trHead.appendChild(thHead1);
    trHead.appendChild(thHead2);
    tHead.appendChild(trHead);

    table.appendChild(tHead);

    let tBody = document.createElement("tbody");
    for(let data of jsonDatas){
        let trBody = document.createElement("tr");
        let tdNom = document.createElement("td");
        tdNom.textContent = data.nom;
        let tdPrenom = document.createElement("td");
        tdPrenom.textContent = data.prenom;
        trBody.appendChild(tdNom);
        trBody.appendChild(tdPrenom);
        tBody.appendChild(trBody);
    }
    table.appendChild(tBody);
    return table;
}