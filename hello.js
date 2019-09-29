console.log("hello");

const person = { phone: "010", salary: "500" };

person.name = "K";

name = person.name;

console.log(name);
console.log(person);

for (const key in person) {
  // console.log(key);
  console.log(key + " : " + person[key]);
}

if (person.hasOwnProperty("name")) {
  console.log("person has a name");
} else {
  console.log("no");
}

function foo() {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("bam");
  console.log(arr);
}
foo("bar", "baz");

const arr1 = [1, 3, "5", 6, 7, 9, 10];
const arr2 = [];
arr1.forEach(function(item) {
  arr2.push(item);
});

console.log(arr2);
