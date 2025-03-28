var mydiv = document.getElementById("mydiv");

function NewTag(){

    let h1 = document.createElement("h1");
    h1.innerHTML = "Hello World!";

    let p = document.createElement("p");
    p.innerHTML = "This is a paragraph.";

    
    mydiv.appendChild(h1);
    mydiv.appendChild(p);
}