const btn = document.getElementById("btn")
const msgCampoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
const inputText = document.querySelectorAll(".input-text")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    inputText.forEach((input, index) => {
            if (input.value.trim() !== "") {
                input.classList.add("valid")
                input.classList.remove("required")
                msgCampoObrigatorio[index].classList.remove("required")
            } else {
                input.classList.add("required")
                input.classList.remove("valid")
                msgCampoObrigatorio[index].classList.add("required")
            }
    })
})

