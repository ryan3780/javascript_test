// 메서드 안에 빈 배열을 선언하면 안되네요;;
let persons = ["park", "kim", "hong", "lee", "na", "oh", "kang"];
let exceptedLee = [];
const newPe = persons.map(function(item) {
  if (item != "lee") {
    exceptedLee.push(item);
  }
  return exceptedLee;
});

console.log(exceptedLee);

// 빈 배열이 글로벌로 선언되면 정상 작동 하는데, 빈 배열이 메서드 안에 선언되면 안되네요;;
(function hhh() {
  let withOutLee = [];
  const filteredArr = persons.filter(function(n) {
    if (n != "lee") {
      withOutLee.push(n);
    }
    return withOutLee;
  });
})();

console.log(withOutLee);

let array = ["park", "kim", "hong", "lee", "na", "oh", "kang"];
const initialMemo = [];

array = array.reduce((memo, iteratee) => {
  // if condition is our filter
  if (iteratee != "lee") {
    // what happens inside the filter is the map
    memo.push(iteratee);
  }

  // this return value will be passed in as the 'memo' argument
  // to the next call of this function, and this function will have
  // every element passed into it at some point.
  return memo;
}, initialMemo);

console.log(array);
