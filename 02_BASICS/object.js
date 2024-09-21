const mySym =  Symbol("key1");
const myObj={
    name: "Vikram",
    "full name": "Vikram Singh",
    age : 20,
    email: "vikrakwal@gmail.com",
    [mySym]:"key1"//important
}
console.log(myObj.name);
console.log(myObj["full name"]);//better way to print an element in object

myObj.email = "Vikrakwal@google.com";
//Object.freeze(myObj);
myObj.email = "Vikrakwal@yahoo.com";
console.log(myObj);

myObj.greeting= function(){
    console.log("Hello JS user");
}
myObj.greeting2= function(){
    console.log(`Hello JS USER , ${this["full name"]}`);
}
console.log(myObj.greeting);
console.log(myObj.greeting2);