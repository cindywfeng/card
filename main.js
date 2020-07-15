const submit = document.querySelector("#form");
submit.addEventListener("submit", createCard)

let greeting;
let event;
let message;
function createCard(e) {
    e.preventDefault();
    const tg = e.target;
    greeting = tg.greeting.value;
    event = tg.event.value;
    message = tg.message.value;

    const card1 = document.querySelector("#cardGreet");
    card1.textContent = greeting;

    const card2 = document.querySelector("#cardMessage")
    card2.textContent = message;

    const card3 = document.querySelector("#cardEvent")

    switch(event) {
        case"birthday":
        card3.textContent="Wishing you a Happy Birthday!"
        break;

        case"wedAni":
        card3.textContent="Wishing you a Happy Wedding!"
        break;

        case"graduation":
        card3.textContent="It's done at last!"
        break;

        case"christmas":
        card3.textContent="We wish you a Merry Christmas!!"
        break;
    }
}










