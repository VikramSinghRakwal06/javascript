const myArr = [1,2,3,4,5,"Vikram"];

// console.log(myArr);
// console.log(myArr[5]);
// console.log(myArr.length);

// const myArr2= new Array(1,2,3,4,5);
// myArr2.push("Singh");
//  console.log(myArr2);
// myArr2.pop();
// console.log(myArr2);

const myArr1= new Array(1,2,3,4,5);

const mySlice = myArr1.slice(1,3);

console.log(mySlice);
console.log("AFTER SLICE ",myArr1);

const mySplice = myArr1.splice(1,3);
console.log("AFTER SPLICE ",myArr1);
console.log(mySplice);