var body = document.getElementById("body")

function red(){

    body.style.backgroundColor = "red";

    setTimeout(()=>{
        yellow()
    },3000);
}


function yellow()
{
    body.style.backgroundColor = "yellow";

    setTimeout(()=>{
        blue();
    },4000)
}


function blue()
{
    body.style.backgroundColor = "blue";

    setTimeout(() => {
        green();
    }, 3000);
}

const green = ()=>{
    body.style.backgroundColor = "green";

    setTimeout(() => {
        red();
    }, 3000);
}