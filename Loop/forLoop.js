// var num = 56789;
// var rev = 0;

// for(;num!=0;){
//     var digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(rev);


// console.log(Math.floor(13/2));


var num = 6754;
var sum = 0;

for(;num>0;){
    let rev = num % 10;
    sum = sum + rev;
    num = Math.floor(num / 10);
}

console.log("Sum of digit = ",sum);
