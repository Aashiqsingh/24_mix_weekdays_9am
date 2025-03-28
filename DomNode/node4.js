var students = [
    {
        roll:101,
        name:"Hetvi",
        age:22,
        gender:"Female",
        email:"hetvi@gmail.com"
    },
    {
        roll:102,
        name:"Ravi",
        age:20,
        gender:"Male",
        email:"ravi@gmail.com"
    },
    {
        roll:103,
        name:"Priya",
        age:21,
        gender:"Female",
        email:"priya@gmail.com"
    },
    {
        roll:104,
        name:"Suresh",
        age:23,
        gender:"Male",
        email:"suresh@gmail.com"
    }
]


var thead = document.getElementById("thead");
thead.style.display = "none";

function getData(){
    var tbody = document.getElementById("tbody");
    thead.style.display = "";


    for(let i=0;i<students.length;i++)
    {

        let tr = document.createElement("tr");
        let rollTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let genderTd = document.createElement("td");
        let emailTd = document.createElement("td");

        rollTd.innerHTML = students[i].roll;
        nameTd.innerHTML = students[i].name;
        ageTd.innerHTML = students[i].age;
        genderTd.innerHTML = students[i].gender;
        emailTd.innerHTML = students[i].email;

        tbody.appendChild(tr);
        tr.appendChild(rollTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(genderTd);
        tr.appendChild(emailTd);
    }



    
}