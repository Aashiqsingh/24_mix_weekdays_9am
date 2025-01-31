function SubmitHandler(event){
    event.preventDefault(); // 
    // alert("Form submitted..");

    var name = document.getElementById("name").value;
    var nameErr = document.getElementById("nameErr");


    // console.log("Name = "+name);
    if(name.length < 4)
    {
        nameErr.innerHTML = "Name is too short..";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = "";
    }
    
    console.log("Form submitted..");
    

    
}