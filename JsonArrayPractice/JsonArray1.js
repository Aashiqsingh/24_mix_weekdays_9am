var stundets = [
    {
        roll:1,
        name:"hetvi",
        std:12,
        email:"hetvi@gmail.com"
    }
    ,{
        roll:2,
        name:"hiya",
        std:13,
        email:"hiya@gmail.com"
    }
    ,{
        roll:3,
        name:"jainish",
        std:11,
        email:"hima@gmail.com"
    }
    ,{
        roll:4,
        name:"jimin",
        std:14,
        email:"jimin@gmail.com"
    }
]

// console.log(stundets);

// for(let i=0;i<stundets.length;i++){

//     console.log(stundets[i].name);
    
// }

stundets.forEach((stu)=>{
    console.log(stu.name.toUpperCase());
    
})

var x = stundets.map((stu)=>{
    return stu.name
})
console.log(x);
