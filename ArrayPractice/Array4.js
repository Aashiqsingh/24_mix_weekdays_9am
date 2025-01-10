var students = ["hiy","hetviy","jainishy","rahuly","happy","saday"];

// var x = students.every((stu)=>{
//     return stu.length > 3;
// })

// console.log(x);

var x = students.every((stu)=> stu.endsWith("y"))
console.log(x);
