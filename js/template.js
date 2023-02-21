const person1 = 'Adam sand';
const person2 = "Ben white";
const person3 = `Donal Trump`;

const multiLine = 'first line of string \n' + 'second line of string \n' + 'third line of code \n' + 'fourth line of text';
// console.log(multiLine);
const newMultiLine = `first line of string
second line of string
third line of code
fourth line of text`;
// console.log(newMultiLine);

const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);
const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);