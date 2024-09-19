//Stack(Primitive data types)            Heap(non-primitive dataypes)

let num1 = 1;
let num2 = num1;
num2 = 2;

console.log(num2);

let myObj1={
    email : "user.google@gmail.com",
   userName : "user"
}
let myObj2 = myObj1;
myObj2.userName = "Vikram";

console.log(myObj1.userName);
console.log(myObj2.userName);