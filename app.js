const express = require("express")
const nunjucks = require("nunjucks")

const app = express()

app.use(express.static("public"))

app.set("view engine", "html")

nunjucks.configure("views", {
    express: app
})

app.get("/index.html", (req, res) => {
    return res.render("index")
})

app.get("/about.html", (req, res) => {
    return res.render("about")
})

app.get("/recipes.html", (req, res) => {
    return res.render("recipes")
})

app.listen(8000, function() {
    console.log("server is running")
})