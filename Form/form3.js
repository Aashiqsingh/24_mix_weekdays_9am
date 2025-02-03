function submitHandler(event){
    event.preventDefault();

    var name = document.getElementById("name");
    var mobile = document.getElementById("mobile");


    var nameRegex = /[A-Za-z]+$/;
    var mobileRegex = /^[6-9]{1}[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name.value.match(nameRegex))
    {
        console.log("Valid userName");
        
    }
    else{
        console.log("Invalid userName");

    }
    if(mobile.value.match(mobileRegex))
    {
        console.log("Valid mobileNumber");
    }
    else{
        console.log("Invalid mobileNumber");
    }
}