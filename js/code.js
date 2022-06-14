"use strict";

const days = document.querySelectorAll(".days");
const graphics = document.querySelectorAll(".graphics");

const getData = async () => {
    const res = await fetch("../data.json");
    if (res.status === 200) {
        const data = await res.json();
        showDays(data);
        showGraphics(data);
        higherGraphic(data);
        eventGraphics(data);
    } else {
        console.log("Houston!... We have a problem");
    }
}

const showDays = data => {
    for (let i = 0; i < days.length; i++) {
        days[i].textContent = data[i].day;
    }
}

const showGraphics = data => {
    for (let i = 0; i < graphics.length; i++) {
        graphics[i].style.height = `${data[i].amount*3}px`;
    }
}

const higherGraphic = data => {
    let higher = 0;
    let position = 0;
    for (let i = 0; i < graphics.length; i++) {
        if (higher < data[i].amount) {
            higher = data[i].amount;
            position = i;
        }
    }
    graphics[position].classList.add("higher");
}

const eventGraphics = data => {
    for (let i = 0; i < graphics.length; i++) {
        graphics[i].addEventListener("mouseover",()=> {
            let newHTMLCode = `
                <div class="graphic__number">
                    <span class="nombre">$${data[i].amount}</span>
                </div>`;
            graphics[i].innerHTML += newHTMLCode;
        })
    }

    for (let i = 0; i < graphics.length; i++) {
        graphics[i].addEventListener("mouseout",()=> {
            graphics[i].innerHTML = "";
        })
    }
}

getData();