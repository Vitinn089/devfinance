const express = require('express')
const app = express()

app.use(express.static(__dirname + '/views'))
.use(express.static('public'))
.get("/", (req, res) => {
    return res.render("./index.html")
})
.listen(5500)