var students = ["hiyaa","hetvi","jainish","rahul","happy","sad"];

// var flag = true;
// for(let i=0;i<students.length;i++){
//     if(students[i].length < 4)
//     {
//         flag = false;
//     }
// }

// console.log(flag);
// var flag = true;
// for(let i=0;i<students.length;i++){
//     if(students[i].includes('i'))
//     {
//         flag = false;
//     }
// }

// console.log(flag);

// some --> boolean

// var x = students.some((stu)=>{
//     return stu.length < 4;
// })
// console.log(x);

var x = students.some((stu)=>{
    return stu.endsWith("y");
})

console.log(x);
