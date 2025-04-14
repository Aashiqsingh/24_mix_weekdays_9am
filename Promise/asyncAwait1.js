// const getData = ()=>{

//     return promise = new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve({
//                 id:101,
//                 message:"Data fetched successfully..."
//             })
//             // reject({
//             //     message:"Problem to fetch data..."
//             // })
//         },3000)
//     })

// }

// getData().then((data)=>{
//     console.log(data);
//     console.log("hetvi hii...");
    
// }).catch((err)=>{
//     console.log(err);
    
// })


const getData = ()=>{

    return promise = new Promise((success,failure)=>{

        setTimeout(()=>{
            success({
                id:102,
                message:"Data fetched succefully..."
            })
        },3000)
    })
}

const get = async()=>{

    const ans = await getData()
    console.log(ans);


    console.log("hii");

    console.log("kem cho..");
    
    console.log("maza ma..");
    
    
}

get()