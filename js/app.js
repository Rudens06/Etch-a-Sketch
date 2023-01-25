document.addEventListener("DOMContentLoaded", function(){
    makeGrid(16);
});

let editBtn = document.getElementById("edit-grid-btn");
var submitBtn = document.getElementById("btn");
var popup = document.getElementById("box-count-popup");
var nmbrInput = document.getElementById("number-input");
var container = document.getElementById("container");

editBtn.addEventListener("click", function(){
    popup.classList.add("show");
});

submitBtn.addEventListener("click", function(){
    popup.classList.remove("show");
    if (nmbrInput.value <= 100){
        updateGrid(nmbrInput.value);
    }
});

var blackInput = document.getElementById("black");
var redInput = document.getElementById("red");
var greenInput = document.getElementById("green");
var blueInput = document.getElementById("blue");
var randomInput = document.getElementById("random");

function makeGrid(side){
    for (let i=0; i<side*side; i++) {
        let div = document.createElement("div");
        div.classList.add("square-div");
        div.setAttribute("id", `${i}`);
        div.style.height = `calc(100vh/${side})`
        div.style.width = `calc(100vh/${side})`
        blackInput.checked = false;
        redInput.checked = false;
        greenInput.checked = false;
        blueInput.checked = false;
        randomInput.checked = false;
        div.addEventListener("mouseover", function(){
            let RValue;
            let GValue;
            let BValue;
            
            if (blackInput.checked){
                RValue = 32;
                GValue = 33;
                BValue = 35;
            }
            else if (redInput.checked){
                RValue = 251;
                GValue = 92;
                BValue = 92;
            }
            else if (greenInput.checked){
                RValue = 121;
                GValue = 190;
                BValue = 32;
            }
            else if (blueInput.checked){
                RValue = 59;
                GValue = 125;
                BValue = 216;
            }
            else if (randomInput.checked) {
                RValue = generateRandom(255);
                GValue = generateRandom(255);
                BValue = generateRandom(255);
            }

            if (!this.getAttribute("style").includes("background-color")) {
                this.style.backgroundColor = `rgb(${RValue}, ${GValue}, ${BValue})`;
            }
        });
        container.appendChild(div);
    }
}

function generateRandom(number) {
    return Math.floor(Math.random() * number + 1);
}

function updateGrid(side){
    let oldGridClass = document.getElementsByClassName("square-div");
    let length = oldGridClass.length;
    for (let i = 0; i<length; i++){
        let box = document.getElementById(i);
        console.log(i);
        container.removeChild(box);
    }
    makeGrid(side);
}



