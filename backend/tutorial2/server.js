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

// const os = require('os');
// const fs = require('fs');


// const user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi ' + user.username + '! \n',()=>{
//     console.log('file is created ')
// })
// console.log(fs)
// console.log('server is running')
// const notes = require('./notes.js')

// const age = notes.age;
// const result = notes.addnum(age,12);
// console.log('result is '+ result);
// const _ = require('lodash')
// const arr = ['Vikram','Vikram','QT','QT',1,2,3,1,2];

// const filter = _.uniq(arr);
// console.log(filter)
console.log('Server is running');
const express = require('express');
const app = express()
const port = 8000
app.get('/',function(req,res){
    res.send('Welcome to our restaurant, what do you want to order')
})

app.get('/NonVeg',function(req,res){
    res.send("Sorry we don't serve non-vegetarian food here")
})

app.get('/Veg',function(req,res){
    res.send(`<h2>Vegetarian Delight</h2>
                <ul>
                <li>Dal Makhni</li>
                <li>Paneer Butter masala</li>
                <li>Shahi Paneer</li>
                <li>Malai Kofta</li>
                </ul>`)
})
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})