function AddElement(){
    var mydiv = document.getElementById("mydiv");


    let h1 = document.createElement("h1");
    h1.innerHTML = "Royal technosoft";
    h1.style.color = "red";


    let p = document.createElement("p");
    p.innerHTML = "We are the best IT company in the world!";

    let img = document.createElement("img")
    // img.setAttribute("src","../images/img1.jpg");
    img.src = "../images/img2.jpg";
    img.style.width = "300px";
    img.style.height = "200px";


    mydiv.appendChild(h1);
    mydiv.appendChild(p);
    mydiv.appendChild(img);
}