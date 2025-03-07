var images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

var prev = document.getElementById("prev");
var image = document.getElementById("image");
var currentIndex = 0;
prev.addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + images.length)% images.length;

    // 0 = (2 - 1 + 5) % 5;

    console.log(currentIndex);

    image.src = "../images/" + images[currentIndex]
    
})

var next = document.getElementById("next");
next.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % images.length
    // console.log(currentIndex);

    image.src = "../images/" + images[currentIndex]
    
})
