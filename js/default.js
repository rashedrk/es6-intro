// function add(first,second) {
//     const add = first + second;
//     return add
// }
// const result = add();
// console.log(result);

// function add(first,second) {
//     second = second || 0;
//     // if (second === undefined) {
//     //     second = 0;
//     // }
//     const add = first + second;
//     return add
// }
// const result = add(40);
// console.log(result);

function add(first = 0 , second = 0) {
    const add = first + second;
    return add
}
const result = add(10,8);
console.log(result);