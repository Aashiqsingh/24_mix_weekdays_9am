var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]


var x = departments.find((depart)=> depart.employees.find((emp)=> emp.name === "payal")).name
console.log(x);




// var x = departments.find((dept)=>dept.name === 'IT').employees.filter((emp)=>emp.gender === 'male');
// console.log(x);

// var x = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.age > 37)
// console.log(x);





// var x = departments.map((depart)=>{
//     return depart.employees.length
// }).reduce((sum,emp)=> sum + emp,0)
// console.log(x);



// var x = departments.map((depart)=>{
//     return depart.name
// })
// console.log(x);
