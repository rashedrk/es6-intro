// break up with var 
// no more use of var 
// let : let it to reassign
// const : don ot let it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'tiya pakhi';
// bird = 'moyna pakhi';
console.log(bird);
const msg = bird + ' ure ja';
console.log(msg);

const numbers = [13,34,56,74];
// numbers = [12,33,65,134,55];
numbers.push(123);
numbers[1] = 44;
console.log(numbers);

const student = {
    name : 'kuddus',
    address : 'sylhet'
};
// student = {
//     name : "ali"
// };
student.name = 'ali';
console.log(student);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; //redeclare as each loop whole block is built as new.
    sum = sum + number; //reassign
    console.log(number);
}
// console.log(number);