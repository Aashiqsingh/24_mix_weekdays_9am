var language = ["hindi","english","norwegian","telgu","gujarati","marathi"];

// var flag = false;
// for(let i=0;i<language.length;i++){

//     if(language[i].length > 3){
//         flag = true;
//     }
// }

// console.log(flag);


// language = language.every((lang)=>{

//     return lang.length > 3;
// })

// console.log(language);

// language = language.every((l)=>{
//     return l.startsWith("e")
// })

// console.log(language);

var x = language.every((lang) => lang.includes("i"))
console.log(x);
