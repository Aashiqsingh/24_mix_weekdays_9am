var btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value


    console.log("Name = ",name);
    console.log("Email = ",email);
    console.log("Phone = ",phone);
})