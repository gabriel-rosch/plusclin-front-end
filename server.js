var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + "/distt/"));
app.get(/.*/,function (req,res) {
res.sendFile(__dirname + "/distt/index.html");
});

app.listen(port);

console.log("Servidor Iniciou com Sucesso!");

