document.addEventListener("DOMContentLoaded", () => {
    
    const firstCard = document.querySelector("#firstCard")
    const secondCard = document.querySelector("#secondCard")

    const firstText = document.querySelector("#firstText")
    const secondText = document.querySelector("#secondText")

    const firstBtnText = document.querySelector("#firstBtnText")
    const secondBtnText = document.querySelector("#secondBtnText")

    const KarlashText = document.querySelector("#KarlashText")
    const YvarovText = document.querySelector("#YvarovText")

    function openText(button, text, btnText, type) {
        const opened = button.classList.contains("card-content__button-opened")
        if (opened) {
            button.classList.remove("card-content__button-opened")
            button.classList.add("card-content__button-closed")
            btnText.textContent = "раскрыть"
            if (type === "Karlash"){
                    KarlashText.textContent = `“Уважаемые коллеги! Приветсвую участников совещания. Заявленная тема...`
            } else {
                    YvarovText.textContent = `“Уважаемые коллеги! Приветсвую участников совещания. Заявленная тема...`
            }
        } else {
            button.classList.remove("card-content__button-closed")
            button.classList.add("card-content__button-opened")
            btnText.textContent = "скрыть"
            if (type === "Karlash"){
                    KarlashText.textContent = `“Уважаемые коллеги! Приветсвую участников совещания. Заявленная тема очень актуальна на сегодняшний день. Пусть наша встреча станет отправной точкой для новых идей и совместных проектов.“`
            } else {
                    YvarovText.textContent = `“Уважаемые коллеги! Приветсвую участников совещания. Заявленная тема очень актуальна на сегодняшний день.“`
            }
        }
        text.classList.toggle("card-content__opened")
    }

    firstCard.addEventListener("click", ()=>openText(firstCard, firstText, firstBtnText, "Karlash"))
    secondCard.addEventListener("click", ()=>openText(secondCard, secondText, secondBtnText, "Yvarov"))
});