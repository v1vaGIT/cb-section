document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM полностью загружен и разобран");
    
    const firstCard = document.querySelector("#firstCard")
    const secondCard = document.querySelector("#secondCard")

    const firstText = document.querySelector("#firstText")
    const secondText = document.querySelector("#secondText")

    const firstBtnText = document.querySelector("#firstBtnText")
    const secondBtnText = document.querySelector("#secondBtnText")

    function openText(button, text, btnText) {
        const opened = button.classList.contains("card-content__button-opened")
        console.log(opened)
        text.classList.toggle("card-content__opened")
        if (opened) {
            button.classList.remove("card-content__button-opened")
            button.classList.add("card-content__button-closed")
            btnText.textContent = "раскрыть"
        } else {
            button.classList.remove("card-content__button-closed")
            button.classList.add("card-content__button-opened")
            btnText.textContent = "скрыть"
        }
    }

    firstCard.addEventListener("click", ()=>openText(firstCard, firstText, firstBtnText))
    secondCard.addEventListener("click", ()=>openText(secondCard, secondText, secondBtnText))
});