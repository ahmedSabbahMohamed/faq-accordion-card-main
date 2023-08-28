let allBtns = document.querySelectorAll(".btn")

allBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.currentTarget.classList.toggle("rotate")
        e.currentTarget.classList.toggle("active")
        e.currentTarget.nextElementSibling.classList.toggle("hide")
    })
})