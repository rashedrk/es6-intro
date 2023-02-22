const max = Math.max(12,334,55,66,3);
// console.log(max);
const numbers = [23,34,422,44];
// const largest = Math.max(numbers);
// console.log(...numbers);
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(123);
numbers2.push(234);
console.log(numbers);
console.log(numbers2);

const numbers3 = [1,2,56, ...numbers ,34,66];
console.log(numbers3);