// console.log('server is running');
// function add( a,  b){
//     return a+b;
// }
// const ad = add(5,4);
// console.log(ad)

// function message(){
//     console.log('Addition complete');
// }

// function add(a,b,message){
//     const add = a+b;
//     message();
//     return add;
// }

// const ad = add(5,10,message);
// console.log(ad);

// function add(a,b,message){
//     const res = a + b;
   
//     console.log('result : '+res);
//     message(); 
// }

// const result = add(5,4,()=>{
//     console.log('Who knows the event');
// })

const os = require('os');
const fs = require('fs');


const user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi ' + user.username + '! \n',()=>{
    console.log('file is created ')
})
