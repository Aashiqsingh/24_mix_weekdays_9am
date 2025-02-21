function text(){

    var text = document.getElementById("text");
    var nameErr = document.getElementById("nameErr");

    if(text.value.length < 4)
    {
        nameErr.innerHTML = "Name must be at least 4 characters..";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = text.value;
        nameErr.style.color = "green";
    }
}