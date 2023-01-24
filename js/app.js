document.addEventListener("DOMContentLoaded", function(){
    var container = document.getElementById("container");
    var side = 16;

    for (i=0; i<side*side; i++) {
        let div = document.createElement("div");
        div.classList.add("square-div");
        container.appendChild(div);
    }
});

