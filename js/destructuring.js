const fish = {
    name : 'king hilsha',
    address : 'chandpur',
    phone : '0192388445',
    price : 5000
};

// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;

const {phone,price} = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(price);

const {age, name} = {name : 'kuddus', age: '45', address: 'kundogram'};

console.log(name);
console.log(age);

// array destructuring
const [first,another] = [44,55,78,87];
console.log(first,another);

const nayoks = ['shakib','bappi', 'raj'];
const [king , lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['halim','dalim']
}
const [baba,kaka] = getNames();
console.log(kaka,baba);