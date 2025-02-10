var login = document.getElementById("login");

login.style.display = "none";

function enterInAtm(){

    var entry = document.getElementsByName("entry");
    var entryTxt = document.getElementById("entryTxt");
    var para = document.getElementById("para");


    if(entry[0].checked === true)
    {
        
        entryTxt.innerHTML = "WELCOME IN ATM.."
        para.style.display = "none"
        login.style.display = "block"

    }
    else if(entry[1].checked === true){
        entryTxt.innerHTML = "THANKYOU FOR VISITING SBI ATM.."
        para.style.display = "none"
    }
}

function detailSubmit(){
    var MinePass = "aashiq123";

    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var output = document.getElementById("output");

    if(pass.value.match(MinePass))
    {
        output.innerHTML = "Correct Matching.."
        login.style.display = "none"

        setTimeout(()=>{
            output.style.display = "none"
        },3000);
    }
    else{
        output.innerHTML = "Invalid Password.."
    }
}