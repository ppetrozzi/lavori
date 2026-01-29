  let n = "";
        let c = "";
        let ele = []; 
        
        function ana() {

            localStorage.getItem("elenco");

            n = document.getElementById("nome").value;
            c = document.getElementById("cognome").value;

            const persone = {}
            persone.nome = n;
            persone.cognome = c;

            ele.push(persone);

            localStorage.setItem("elenco", JSON.stringify(ele));

        }
