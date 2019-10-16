// .map으로는 도저히 "lee"라는 것을 제외한 새로운 배열을 못 만들겠습니다.
let persons = ["park", "kim", "hong", "lee", "na", "oh", "kang"];
const newPe = persons.map(function(item) {
  let exceptedLee = [];
  if (item != "lee") {
    exceptedLee += item;
  }
  return exceptedLee;
});

console.log(newPe);

// 빈 배열이 글로벌로 선언되면 정상 작동 하는데, 빈 배열이 메서드 안에 선언되면 안되네요;;
let ee = [];
const arr2 = newPe.filter(function(n) {
  if (typeof n != "object") {
    ee.push(n);
  }
  return ee;
});

console.log(ee);

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

const del = persons.map(e => {
  if (e === "lee") {
    e = e.replace(/lee/g, null);

    return e;
  }
  return e;
});

console.log(del);

// const deletElm = persons.splice(persons.indexOf("lee"), 1);

// console.log(persons);
