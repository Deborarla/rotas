const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1> Pagina inicial de testes <h2>")
})
router.get("/html", (req, res) => {
    res.sendFile(__dirname + "/documentos/index.html")
})
router.get("/javascript", (req, res) => {
    res.sendFile(__dirname + "/documentos/index.js")
})  

module.exports = router