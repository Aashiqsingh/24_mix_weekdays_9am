var box = document.getElementsByClassName("box");

box[0].addEventListener("mouseenter",()=>{
    box[2].style.backgroundColor = "red";
    box[2].style.borderRadius = "50%"
})

box[0].addEventListener("mouseleave",()=>{
    box[2].style.backgroundColor = "white";
    box[2].style.borderRadius = "0%"
})



var color = ["red","green","yellow","blue","pink"]
box[2].addEventListener("mousemove",()=>{

    var randomColor = Math.floor(Math.random() * color.length)
    box[1].style.backgroundColor = color[randomColor]
})

