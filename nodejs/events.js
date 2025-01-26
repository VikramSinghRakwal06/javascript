const { log } = require('console');
const event = require('events');
const { EventEmitter } = require('stream');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfall',()=>{
    console.log('Please turn off the motor');

    setTimeout(()=>{
        console.log('OverFlow, please turn off the motor')
    },3000)
});
myEmitter.emit('Waterfall');
console.log('Code is running');

