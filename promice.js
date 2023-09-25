const prom1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("task completed");
        resolve()
    }, 1000);
})
// prom1.then(function(){
//     console.log("promise completed");
// })
new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({"name":"aman"})
    },1000)    
}).then(function(user){
    // console.log(user);
})

const prom2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let err = false
        if(!err){
            resolve({"name":"Vini","who":"someone"})
        } else{
            reject("Error boom boom")
        }
    }, 10000);
})

prom2.then(function(user){
    console.log(user);
    return user.name;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("promise is either rejected or resolved"))

// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let err = true
//         if(!err){
//             resolve({"name":"Lionel Messi","who":"the Best"})
//         } else{
//             reject("Error boom boom")
//         }
//     }, 1000);
// })

// async function promiseresolver(){
//     try {
//         const res = await prom3
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// promiseresolver()


async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers()