const recipes = document.querySelectorAll(".recipe")
const hideButtons = document.querySelectorAll(".hide-button")

for(let hideButton of hideButtons) {
    hideButton.addEventListener("click", function() {
        const buttonId = hideButton.getAttribute("id")
        const list = document.querySelector(`.recipe-${buttonId}_list`)
        if(list.classList.contains("hidden")) {
            list.classList.remove("hidden")
        } else {
            list.classList.add("hidden")
        }
    })
}


for(let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}