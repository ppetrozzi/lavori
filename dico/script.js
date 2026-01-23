let warning = document.getElementById("asdf");
function funzione() {
    let gender;
    let veicoli = [];
    for(i=0;i<document.getElementsByName("sesso").length;i++) {
        if(document.getElementsByName("sesso")[i].checked){
            gender = document.getElementsByName("sesso")[i].value
        }
    }

    for (let i = 1; i <= 5; i++) {
        if (document.getElementById("veicolo" + i) && document.getElementById("veicolo" + i).checked) {
            veicoli.push(document.getElementById("veicolo" + i).value);
        }
    }
    
    if(gender == undefined){
        gender = "non impostato"
        console.log("no")
    } 
    let persona = {
        nome: document.getElementById("nome").value.trim(),
        cognome: document.getElementById("cognome").value.trim(),
        sesso: gender,
        veicoli: veicoli.join(", "), 
        indirizzo: document.getElementById("indirizzo").value.trim(),
        citta: document.getElementById("citta").value.trim(),
        provincia: document.getElementById("provincia").value.trim(),
        cap: document.getElementById("cap").value.trim(),
        eta: new Date().getFullYear() - document.getElementById("eta").value.substring(0,4),
        materia: document.getElementById("materia").value,
        generazione: "" 
    }
    if(document.getElementById("eta").value.substring(0,4) == ''){
        persona.eta = "non impostata"
    }
    if(persona.eta != "non impostata"){
        if (document.getElementById("eta").value.substring(0,4) <= 1927) {
        persona.generazione = "Greatest Generation";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1928 && document.getElementById("eta").value.substring(0,4) <= 1945) {
        persona.generazione = "Generazione Silenziosa";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1946 && document.getElementById("eta").value.substring(0,4) <= 1964) {
        persona.generazione = "Baby Boomers";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1965 && document.getElementById("eta").value.substring(0,4) <= 1980) {
        persona.generazione = "Generazione X";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1981 && document.getElementById("eta").value.substring(0,4) <= 1996) {
        persona.generazione = "Generazione Millenials";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1997 && document.getElementById("eta").value.substring(0,4) <= 2012) {
        persona.generazione = "Generazione Z";
    } else if(document.getElementById("eta").value.substring(0,4) >= 2013) {
        persona.generazione = "Generazione Alpha";
    } else {
        persona.generazione = ""
    }
    } else {
        persona.generazione = "non impostata"
    }
    
    if(persona.sesso == ""){
        persona.sesso = "non impostato"
    }
    
    if(persona.veicoli.length == 0){
        persona.veicoli= "non impostato";
    }
    if(persona.indirizzo == ""){
        persona.indirizzo = "non impostato";
    }
    if(persona.citta == ""){
        persona.citta = "non impostata"
    }
    if(persona.provincia == ""){
        persona.provincia = "non impostata"
    }
    if(persona.cap == ""){
        persona.cap = "non impostato"
    }  

    if(persona.nome.trim() != "" && persona.cognome.trim() != ""){
        localStorage.setItem("persona" + localStorage.length.toString(), JSON.stringify(persona))
        window.location.href = "./stampa.html"}
    else {
        warning.style.color = "red"
        if(persona.nome.trim() == "" && persona.cognome.trim() != ""){
            warning.innerHTML = "Inserire nome"
        }
        else if(persona.cognome.trim() == "" && persona.nome.trim() != ""){
            warning.innerHTML = "Inserire cognome"
        }
        else{
            warning.innerHTML = "Inserire nome e cognome"
        }
    }  
    
}
function cancella(){
    if(localStorage.length != 0){
        warning.style.color = "green";
        warning.innerHTML = "Dati Cancellati"
    } else {
        warning.style.color = "orange";
        warning.innerHTML = "Dati non presenti"
    }
    localStorage.clear();
    
}

function controllo(){
    if(localStorage.length != 0){
        window.location.href = "./stampa.html";
    }
    else {
        warning.style.color = "orange";
        warning.innerHTML = "Dati non presenti"
    }
}