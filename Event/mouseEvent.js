// mouse event 
// 1. onclick
// 2. ondblclick 


// function changeText(){

//     document.getElementById("txt").innerHTML = "Royal technosoft pvt ltd."
// }

const changeText = ()=>{
    // document.getElementById("txt").innerHTML = "Royal technosoft pvt ltd."

    var txt = document.getElementById("txt");
    txt.innerHTML = "Royal technosoft pvt ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "200px";
    txt.style.width = "200px";
}