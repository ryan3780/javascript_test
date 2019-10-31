// console.log("hello");

// const person = { phone: "010", salary: "500" };

// person.name = "K";

// name = person.name;

// console.log(name);
// console.log(person);

// for (const key in person) {
//   // console.log(key);
//   console.log(key + " : " + person[key]);
// }

// if (person.hasOwnProperty("name")) {
//   console.log("person has a name");
// } else {
//   console.log("no");
// }

// function foo() {
//   const arr = Array.prototype.slice.call(arguments);
//   arr.push("bam");
//   console.log(arr);
// }
// foo("bar", "baz");

// const arr1 = [1, 3, "5", 6, 7, 9, 10];
// const arr2 = [];
// arr1.forEach(function(item) {
//   arr2.push(item);
// });

// console.log(arr2);

// const a = "foo";

// const c = Array.prototype.join.call(a, "-");
// console.log(c);

// const someText = "abbbbbbbb bced";
// const pattern = /^a*b+/g;

// const matches = someText.match(pattern);

// console.log(matches);

// var votes = { kim: 1, hong: 3, lee: 3 };
// var reducer = function(value) {
//   for (const iterator in value) {
//     console.log(iterator);
//   }
// };
// var initialValue = [];
// var result = reducer(votes);
// console.log(result); // { kim: 1, hong: 3, lee: 3 }

const str = 'Zbcdefg'

console.log(str.split().sort().reverse().join(''))