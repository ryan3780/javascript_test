const arr = [];
console.log(Object.prototype.toString.call(arr));
console.log(typeof arr);

function compareNum(a, b) {
  return a - b;
}

function makeArrayElement(array) {
  if (Array.isArray(array) === true) {
    for (i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 10 + 1);
      makedArr = array.push(randomNumber);
    }
    makedArr = array.sort(compareNum);
  } else {
    return "This is not Array!";
  }
}

makeArrayElement(arr);
console.log(arr);

// Array.from() 메서드는 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
const removeOverlap = Array.from(new Set(arr));
console.log(removeOverlap);
console.log(Object.prototype.toString.call(removeOverlap));
console.log(typeof removeOverlap);

// 단순히 .reduce() 내장 함수로 처리한 함수
function sum(array) {
  const sumElement = array.reduce((pre, val) => pre + val);
  console.log(sumElement);
}

sum(removeOverlap);

// for...in문으로 배열의 있는 요소들 더하는 함수
function forInSum(array) {
  let total = 0;
  for (const e in array) {
    total += array[e];
  }
  return console.log(total) + total;
}

forInSum(removeOverlap);

// for문으로 배열의 있는 요소들 더하는 함수
function forSum(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return console.log(total) + total;
}

forSum(removeOverlap);

const str = `abcde`;
console.log(typeof str);
const n = 134;
// console.log(str);

// Array의 프로퍼티를 빌려서 str의 값에 "-"을 추가하는 함수
function sumStr(str) {
  const plusHyphen = Array.prototype.join.call(str, "-");
  console.log(plusHyphen);
}

sumStr(str);

// for...in 루프를 사용하여, str의 값에 "-"추가하는 함수
function forInStr(str) {
  if (typeof str === "string") {
    let blankText = "";
    let hyphen = "-";
    let fullText = "";
    for (const s in str) {
      blankText = str[s];
      a = blankText.concat(hyphen);
      console.log(a);
      fullText += a;
    }
    return console.log(fullText.slice(0, -1));
  } else {
    return console.log("this is not string!");
  }
}

forInStr(str);
