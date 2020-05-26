const express = require("express")
const nunjucks = require("nunjucks")

const app = express()

app.use(express.static("public"))

app.set("view engine", "njk")

nunjucks.configure("views", {
    express: app
})

app.get("/", (req, res) => {
    return res.render("index")
})

app.get("/about", (req, res) => {
    return res.render("about")
})

app.get("/recipes", (req, res) => {
    return res.render("recipes")
})

app.listen(8000, function() {
    console.log("server is running")
})