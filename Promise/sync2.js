const getData = ()=>{

    const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully..."
            })
        },3000)
    })

    // console.log(promise);

    // promise.then((data)=>{
    //     console.log(data);
        
    // })
    // promise.catch((err)=>{
    //     console.error(err);
    // })

    // promise.then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     console.error(err);
    // })

    return promise;
    
    
}

// var ans = getData();
// ans.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })


getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
    
})