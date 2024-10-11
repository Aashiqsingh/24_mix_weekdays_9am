var mobile = {
    id:102,
    name:"IPHONE",
    isAvailbale:true,
    color:["red","green","blue","white","black"],
    price:96000,
    property:{
        ram:"8bg",
        storage:"64gb",
        camera:"12mp",
        battery:"3000mah",
        display:"6.5inch",
        os:"iOS"
    },
    delivery:"free delivery"
}


// console.log(mobile);

// console.log(mobile.name);
// console.log(mobile.price);


// console.log(mobile.property);
// console.log(mobile.property.storage);


console.log(mobile.color);
console.log(mobile.color[2]);


for(let i=0;i<mobile.color.length;i++){
    console.log(mobile.color[i]);
    
}





