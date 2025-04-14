const getOrder = ()=>{

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:123,
                message:"Order have been placed succefully..",
                amount:450
            })
        },4000)
    })

}

const getAmount = (data)=>{
    return promise= new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                amountId:data.orderId,
                message:"Amount payed succefully...",
                amount:data.amount
            })
        },3000)
    })
}

getOrder().then((data)=>{
    console.log("oredr succefully ........",data);

    getAmount(data).then((amountData)=>{
        console.log("amount successfully ......",amountData);
        
    }).catch((error)=>{
        console.log("Amount payed cancelled....",error);
        
    })
    
}).catch((err)=>{
    console.log("order cancelled.....",err);
    
})