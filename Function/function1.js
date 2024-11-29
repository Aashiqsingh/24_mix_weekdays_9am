// there are four types of functions
// 1. without argument without return type 
// 2. with argument without return type
// 3. without argument with return type
// 4. with argument with return type

// function : keyword 
// return : return keyword

// function : code reusiblity 


// without argument without return type
function demo()
{
    console.log("Demo function called...");
    
}

// demo()
// demo()

// with argument without return type

function add(x,y,z){

    // console.log("Value of x = ",x);
    // console.log("Value of y = ",y);
    // console.log("Value of z = ",z);
    
    console.log(x+y+z);
    
}

// add(2,3,4)
// add(303,"ram",true);

// add(2,3,"ram")

// 

// without argument with return type

function test()
{
    return "royal technsoft";
}

// let x = test()
// console.log(x);

// console.log(test());

// with argument with return type

function mul(a,b){

    return a * b
}

var x = mul(3,4)
console.log("Multiply = ",x);

