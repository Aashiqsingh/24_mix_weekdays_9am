const students = [
    {
        id:1,
        name:"rahul",
        age:23,
        email:"rahul@gmail.com",
        salary:10000
    },
    {
        id:2,
        name:"raj",
        age:24,
        email:"raj@gmail.com",
        salary:20000
    },
    {
        id:3,
        name:"rohit",
        age:25,
        email:"rohit@gmail.com",
        salary:30000
    }
]

var x = students.filter((stu)=> stu.email.includes("h"))
console.log(x);



// var sum = 0;

// for(let i=0;i<students.length;i++){

//     sum = sum + students[i].salary
// }
// console.log(sum);

var x = students.reduce((sum,stu)=> {
    return sum + stu.salary
},0)

console.log(x);






// var x = students.filter((stu)=>{
//     return stu.age >= 24
// })
// console.log(x);






// console.log(students);

// console.log(students[0]);

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name.toUpperCase());
    
// }

// students.forEach((stu)=>{
//     console.log(stu.name);
    
// })

// var x = students.map((stu)=>{
//     return stu.name
// })

// console.log(x);
