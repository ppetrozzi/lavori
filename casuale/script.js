document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");
    const resultDiv = document.getElementById("result");

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0]; // Seleziona il primo file
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            const rows = text.split('\n'); // Dividi in righe
            const strings = [];

            // Estrae le stringhe da ogni riga
            rows.forEach(row => {
                const cols = row.split(','); // Dividi in colonne
                cols.forEach(col => {
                    if (col.trim() !== '') { // Ignora celle vuote
                        strings.push(col.trim());
                    }
                });
            });

            // Seleziona casualmente una stringa
            const randomString = strings[Math.floor(Math.random() * strings.length)];

            // Stampa la stringa casuale
            resultDiv.innerText =  randomString;
        };

        reader.readAsText(input);
    });
});
