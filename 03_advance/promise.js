const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("ASYNC 1");
        resolve();
    },1000)
})
promiseOne.then(()=>{
    console.log("PROMISE ONE resolved.");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("ASYNC 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("PROMISE2 resolved");
});


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('ASYNC 3');
        let error = false;
        if(!error){
            resolve({userName : "HITESH", password : "12345"});
        }
        else{
            reject('ERROR: something went wrong');
        }
    },1000)
})

promiseThree
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((user2)=>{
    console.log(user2);//username
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("THE promise is finally either resolved or rejected"));

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        console.log("Promise 5")
        if(!error){
            resolve({userName:"Vasu", password:"123"});
        }
        else{
            reject('Error: NOT WORKING');
        }
    },1000);
});
async function consumePromiseFive() {
    try{
        const response = await promisefive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
};
consumePromiseFive();


// async function getAlldata(){
//     console.log('here');
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         //console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:",error);
//     }
// }
// getAlldata();
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})