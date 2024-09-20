const myArr = new Array(1,2,3);
const myArr2= new Array(4,5);
// myArr.push(myArr2);
// console.log(myArr);

// console.log(myArr[3][1]);
const my_array = myArr.concat(myArr2);
console.log(my_array);

const my_good_array = [...myArr,...myArr2,...my_array];
console.log(my_good_array);
console.log(Array.from("VIKRAM"));
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));