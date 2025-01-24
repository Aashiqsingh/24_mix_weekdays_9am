var a = 1;

var colors = ["red", "green", "blue", "black","pink","orange","pinkgreen","yellow"]

// console.log(colors[0]);

function change(){

    // console.log(a++);
    // console.log("kardam");

    var mydiv = document.getElementById("mydiv");
    
    var randomIndex = Math.floor(Math.random() * colors.length)
    
    // console.log(randomIndex);
    mydiv.style.backgroundColor = colors[randomIndex]
    
}