const express = require("express")
const nunjucks = require("nunjucks")

const app = express()
const recipes = require("./data")

app.use(express.static("public"))

app.set("view engine", "njk")

nunjucks.configure("views", {
    express: app
})

app.get("/", (req, res) => {
    return res.render("home", { recipes })
})

app.get("/about", (req, res) => {
    return res.render("about")
})

app.get("/recipes", (req, res) => {
    return res.render("recipes", { recipes })
})

app.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = (recipes[recipeIndex]);
  
    return res.render("recipe", { recipe })
  })

app.listen(3000, function() {
    console.log("server is running")
})