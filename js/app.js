document.addEventListener("DOMContentLoaded", function(){
    var container = document.getElementById("container");
    var side = 16;

    for (let i=0; i<side*side; i++) {
        let div = document.createElement("div");
        div.classList.add("square-div");
        div.style.height = `calc(100vh/${side})`
        div.style.width = `calc(100vh/${side})`
        container.appendChild(div);
    }
});

    


