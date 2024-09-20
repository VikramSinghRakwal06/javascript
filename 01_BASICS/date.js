let myDate = new Date();
console.log(myDate);


console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString())
let myNewdate = new Date(2024,0,5);
console.log(myNewdate.toDateString());

let myDate2= new Date(2024,0,4,5,0);
let myDate3 = new Date("01-23-2024");
console.log(myDate2.toString());
console.log(myDate3.toLocaleDateString());



let myTimestamp =Date.now();
console.log(myTimestamp);
console.log(myDate3.getTime());

console.log(Math.round(myTimestamp/1000));


console.log(myDate.getMonth()+1);

myDate.toLocaleDateString('default',{
weekday: "long"
})

`THE da is  ${myDate.getDate} and the day is `;//
