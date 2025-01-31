const submitHandler = (event)=>{
    event.preventDefault();

    var output = document.getElementById('output');
    var output2 = document.getElementById('output2');

    var name = document.getElementById("name");
    var gender = document.getElementsByName("gender");
    var age = document.getElementById("age").value;

    var gen = ' ';
    if(gender[0].checked === true)
    {
        gen = "Male";
    }
    else if(gender[1].checked === true){
        gen = "Female";
    }
    else if(gender[2].checked === true){
        gen = "Other";
    }

    // console.log("Name : "+ name.value);
    // console.log("Gender :" + gen);

    output2.innerHTML = name.value + " " + gen;

    if(gen === "Male")
    {
        if(age > 18)
        {
            output.innerHTML = "You are eligible";
        }
        else{
            output.innerHTML = "You are not eligible";
        }
    }
    else if(gen === "Female"){
        if(age > 21)
        {
            output.innerHTML = "You are eligible";
        }
        else{
            output.innerHTML = "You are not eligible";
        }
    }
    else{
        if(age > 25)
        {
            output.innerHTML = "You are eligible";
        }
        else{
            output.innerHTML = "You are not eligible";
        }
    }
    
    
}