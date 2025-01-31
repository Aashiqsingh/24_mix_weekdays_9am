function Print(){
    var input = document.getElementById("input");

    // console.log(input.value);
    var email = document.getElementById("email");
    // console.log(email.value);

    // var user = {
    //     name:input.value,
    //     email:email.value
    // }
    // console.log(user);

    var mobile = document.getElementById("mobile");
    var mobileErr = document.getElementById("mobileErr");

    var nameErr = document.getElementById("nameErr");

    if(input.value.length < 5)
    {
        // alert("Name should contain at least 5 characters");
        // return;
        nameErr.innerHTML = "Name should contain at least 5 characters"
        nameErr.style.color = "red";
    }
    if(mobile.value.length < 10)
    {
        mobileErr.innerHTML = "Mobile number should contain at least 10 digits"
    }
    else{
        mobileErr.innerHTML = " "
        nameErr.innerHTML = " "
    }

    var user = {
        name:input.value,
        email:email.value,
        mobile:mobile.value
    }

    console.log(user);

    var output = document.getElementById("output");
    // output.innerHTML = user.name + " " + user.email + " " + user.mobile
    output.innerHTML = JSON.stringify(user);

    console.log(JSON.stringify(user)[0]);
    
    
}