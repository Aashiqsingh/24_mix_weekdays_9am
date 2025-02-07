const submitHandler = (event)=>{
    event.preventDefault();


    var email = document.getElementById("email")

    // console.log(name.value);

    localStorage.setItem("email",email.value);

    var pass = document.getElementById("pass")

    localStorage.setItem("pass",pass.value);

    
}

// const getData = ()=>{


//     var x = localStorage.getItem("email")
//     console.log(x);

//     var y = localStorage.getItem("pass")
//     console.log(y);


    
// }

const clearStorage = ()=>{

    // localStorage.clear();
    localStorage.removeItem("email");
}

const getData = ()=>{

    window.location.assign("http://127.0.0.1:5500/Storage/test.html")

}