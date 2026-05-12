const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
const port = 80;

//Middleware per elaborare i dati del modulo
//app.use(bodyParser.urlencoded({ extended: true }));

// Servire il file HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

 app.get("/pag2", (req, res) => {
    res.sendFile(__dirname + "/pagina2.html");
});

// Gestire l'invio del modulo
/*app.post("/submit", (req, res) => {
    const userInput = req.body.text; // Recupera il valore del campo "text"
    res.send(`<h1>Hai inviato: ${userInput}</h1><br><a href="/">Torna</a>`);
});*/

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
