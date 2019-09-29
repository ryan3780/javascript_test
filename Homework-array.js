const arr = [];

function compareNum(a, b) {
  return a - b;
}

function sixTimes() {
  if (typeof arr !== "undefined") {
    console.log("Starting");
    for (i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 100);
      arr.push(randomNum);
    }
    arr.sort(compareNum);
  }
}

sixTimes();
const newArr = [...new Set(arr)];
console.log(arr);
console.log(newArr);

const zeroToFive = newArr.slice(0, 5);
console.log(zeroToFive);

const threeToSeven = newArr.slice(3, 7);
console.log(threeToSeven);
