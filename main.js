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


    const body = document.querySelector("body")
    const cardDisplay = document.querySelector("#cardDisplay")
    const h1 = document.querySelector("h1")
    

    submit.style.display= "none";


    switch(event) {
        case"birthday":
        card3.textContent="Wishing you a Happy Birthday!"
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)"
        body.style.backgroundSize = "Cover"
        body.style.backgroundRepeat = "no-repeat"        
        body.style.height = "100%"
        body.style.margin = "0"
        break;

        case"wedAni":
        card3.textContent="Wishing you a Happy Wedding!"
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1591478575980-c3f37667c77c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)"
        body.style.backgroundSize = "Cover" 
        body.style.height = "100%"
        h1.style.color = "#efc9df"


        break;

        case"graduation":
        card3.textContent="It's done at last!"
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)"
        body.style.backgroundSize = "Cover"
        body.style.height = "100%"
        cardDisplay.style.background = "rgba(55, 59, 55, 0.8)"
        h1.style.color = "black"

        break;

        case"christmas":
        card3.textContent="We wish you a Merry Christmas!!"
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1514377006585-6e7975371bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)"
        body.style.backgroundSize = "Cover"
        h1.style.color = "#c54245"
        

        body.style.height = "100%"
        break;
    }


}



    
    













