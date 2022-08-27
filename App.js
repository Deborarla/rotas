const express = require('express')
const app = express()
const rotas = require("./rotas/rotas")

app.get("/", function(req, res){
    res.send("Seja bem-vinda(o) ao meu App :)")
})

//Rotas
app.use('/rotas', rotas)



app.listen(8086, function(){
    console.log("Servidor rodando na URL http://localhost:8086")
})