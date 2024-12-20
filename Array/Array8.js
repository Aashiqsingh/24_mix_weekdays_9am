var language = ["hindi","english","norwegian","telgu","gujarati","marathi"];


// const  deleteLanguage = (LangName)=>{

//     var x = language.filter((lang)=>{
//         return lang != LangName
//     })

//     return x
// }

// var deleteLang = "marathi"

// var x = deleteLanguage(deleteLang)
// console.log(x);

// --------------------------------------------------------

// const  deleteLanguage = (LangName)=>{

//     return language.filter((lang)=>{
//         return lang != LangName
//     })

    
// }

// var deleteLang = "marathi"

// var x = deleteLanguage(deleteLang)
// console.log(x);

// --------------------------------------------------------

// const  deleteLanguage = (LangName)=>{

//     return language.filter((lang)=> lang != LangName)

    
// }

// var deleteLang = "telgu"

// var x = deleteLanguage(deleteLang)
// console.log(x);

// ---------------------------------------------------------------

var language = ["hindi","english","norwegian","telgu","gujarati","marathi"];



const  deleteLanguage = (LangName)=> language.filter((lang)=> lang != LangName)

    


var deleteLang = "telgu"

var x = deleteLanguage(deleteLang)
console.log(x);