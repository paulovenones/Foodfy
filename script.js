const recipes = document.querySelectorAll(".recipe")
modalOverlay = document.querySelector(".modal-overlay")

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})

for(let recipe of recipes) {
    addEventListener("click", function() {
        modalOverlay.classList.add("active")
    })
}