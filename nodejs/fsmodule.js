const { errorMonitor } = require('events');
const fs = require('fs');

// fs.readFile('file.txt','utf8',(error,data)=>{
//     console.log(error,data);
// })

console.log('Reading starts')
fs.writeFile('file.txt','New Changes are made',()=>{
    console.log('file edited')
})

// const a = fs.readFileSync('file.txt');
// console.log(a.toString())
console.log('finished reading')
