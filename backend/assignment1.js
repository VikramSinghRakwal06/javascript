 var prompt = require('prompt-sync')();
//let age= prompt('Enter your age :');

// if(age<18 && age>0){
//     console.log('You get 20% discount on the tickets.')

// }
// else if(age>=18 && age < 65){
//     console.log('You get tickets on normal price');
// }
// else{
//     console.log('You get a 30% discount on ticket price');
// }

//  let length = prompt('Enter the length of the rectangle: ');
// let width = prompt('Enter the width of a rectange : ');

// const area = length * width;
// console.log('The area of the rectangle is : '+ area);


// function product(name, price, inStock){
//     this.name = name;
//     this.price = price;
//     this.inStock= inStock;
// }

// const p1 = new product('maggi',10,true);

// const p2 = new product(
//     'coffee', 5, false
// );

// const p3 = new product('sugar', 20 , true);

// const market = [p1,p2,p3];
// console.log(market)

// const party = ['Vikram','Milan','Vanshaj','Akshat','Himneesh','Jalaj','Aayush','QT'];

// let guest = prompt('What is your name?');
// let invite = false;
// for(let i = 0;i<party.length;i++){
//     if(party[i]===guest){
//         console.log('You are invited to the party');
//         invite= true;
//     }
    
// }

// if(!invite){
//     console.log('You are not invited to the party');
// }
const weather = {
    'date':'27-1-2025',
    'temperature':'15° C',
    'conditions':'dry',
    'humidity':'19%'
}

console.log(JSON.stringify(weather))