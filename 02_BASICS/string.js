const name = "Vikram";
const repo = 40;

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const newStr = new String("Vikram-Singh-Rakwal");

console.log(newStr.length);

console.log(newStr.indexOf('i'));

console.log(newStr.__proto__);

console.log(newStr.charAt(3));

console.log(newStr.toUpperCase());

const str2 = newStr.substring(0,4);

console.log(str2);

const str3 = "  VIKRAM   ";
console.log(str3.trim());

const str4 = newStr.slice(-8,4);
console.log(str4);


const url = "https://VikramSingh@google.com/Vikram%20Singh";

console.log(url.replace('%20','-'));

console.log(url.includes('Rakwal'));

console.log(newStr.split('-'));