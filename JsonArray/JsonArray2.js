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





// var x = departments.filter((dept)=>{
//     return dept.name === "Finance"
//  })[0].employees.length;
//  console.log(x);
 

// var x = departments.find((depart)=> depart.name === "Finance").employees.length
// console.log(x);





// const Employees25 = employee
//   .filter(employee => employee.department === "HR" && employee.age > 25)
//   .map(employee => employee.name);

// console.log(Employees25);

// var x = department.reduce((sum,finace))=> sum + depart.employees.finace.length , 0)
// const Employees25 = employees
//   .filter(employee => employee.department === "HR" && employee.age > 25)
//   .map(employee => employee.name);

// console.log(Employees25);


// var x = departments.reduce((sum,depart)=> sum + depart.employees.length,0);
// console.log(x);



// var x = departments.map((depart)=> depart.employees.filter((emp)=> emp.gender === "male"))
// console.log(x);




// var x = departments.filter((dept)=>{
//     return dept.employees.filter((emp)=>{
//          return emp.gender === "male";
//      })
//  })
 
//  console.log(x);
 


// var x = departments.find((dept)=>
//     {
//      return dept.name ==="IT";
//     }).employees.filter((emp)=>{
//      return emp.age === 25;
//     });

//     console.log(x);
    

// var x = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.gender === "female")
// console.log(x);

// var x = departments.find((depart)=>{
//     return depart.name === "Finance"
// }).employees.filter((emp)=>{
//     return emp.gender === "female"
// })
// console.log(x);




// var x = departments.filter((depart)=> depart.name === "Finance")[0].employees.filter((emp)=> emp.gender === "female")
// console.log(x);








// console.log(departments);

// var x = departments.map((depart)=>{
//     return depart.name
// })

// console.log(x);
