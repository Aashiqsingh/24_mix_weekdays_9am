function getData(){

    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            // resolve("Data fetched successfully...");
            reject("Failed to fetch data...");
        },3000)
    })

    console.log(promise);
    

    // console.log(promise);
    promise.then((data)=>{
        console.log(data);
        
    })

    promise.catch((err)=>{
        console.log(err);
    })
    

}


getData()