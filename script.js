const recipes = document.querySelectorAll(".recipe")
modalOverlay = document.querySelector(".modal-overlay")
modalContent = document.querySelector(".modal-content")

for(let recipe of recipes) {
    recipe.addEventListener("click", function() {
        modalOverlay.classList.add("active")
        const img = recipe.querySelector(".recipe-image")
        const imgUrl = img.getAttribute('src')

        const title = recipe.querySelector(".recipe-title").textContent
        const by = recipe.querySelector(".by").textContent

        modalContent.querySelector("img").src = `${imgUrl}`
        modalContent.querySelector(".modal-title").textContent = `${title}`
        modalContent.querySelector(".by-modal").textContent = `${by}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})
