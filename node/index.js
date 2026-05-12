var http = require("http");
function onRequest(request, response) {
      console.log("Richiesta ricevuta dal server");
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<h1>Richiesta ricevuta</h1>");
      response.end();
} 
http.createServer(onRequest).listen(8080);
console.log("Server avviato");
