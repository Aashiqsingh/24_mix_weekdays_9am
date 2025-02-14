var txt = document.getElementById("txt");

// onclick --> click
// ondblclick --> dblclick
txt.addEventListener("click",()=>{

    txt.innerHTML = "Royal technosoft pvt ltd."
})

txt.addEventListener("dblclick",()=>{
    txt.style.backgroundColor = "red"
})

txt.addEventListener("mouseleave",()=>{
    txt.style.color = "white"
})