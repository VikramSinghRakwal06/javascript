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


function product(name, price, inStock){
    this.name = name;
    this.price = price;
    this.inStock= inStock;
}

const p1 = new product('maggi',10,true);

const p2 = new product(
    'coffee', 5, false
);

const p3 = new product('sugar', 20 , true);

const market = [p1,p2,p3];
console.log(market)