// console.log(Object.prototype.toString.call(arr2));
// console.log(typeof arr2);

function arrayToString(arr) {
  const str = arr.toString();
  const splitStr = str.split(",");
  const joinElement = splitStr.join(" , ");
  return console.log("[ " + joinElement + " ]");
}

function compare(a, b) {
  return a - b;
}

function makeRandomDigits(n) {
  var empty = [];
  for (i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    empty.push(randomNumber);
  }
  return empty.sort(compare);
}

var digits = makeRandomDigits(5);
console.log("랜덤 숫자 배열 : " + digits);

// Array.from() 메서드는 유사 배열 객체(arr2ay-like object)나반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
const uniqueDigits = Array.from(new Set(digits));
console.log("중복 제거한 랜덤 숫자 배열 : " + uniqueDigits);
// console.log(Object.prototype.toString.call(removeOverlap));
// console.log(typeof removeOverlap);
console.log(
  "---------------------------------------------------------------------------"
);
// 단순히 .reduce() 내장 함수로 처리한 함수
function sum(digits) {
  return digits.reduce((pre, val) => pre + val);
}

var sumByReduce = sum(uniqueDigits);
console.log(
  "Reduce() 메서드로 중복 제거한 랜덤 숫자 배열의 합 = " + sumByReduce
);
// for...in문으로 배열의 있는 요소들 더하는 함수
function forInSum(digits) {
  let total = 0;
  for (const e in digits) {
    total += digits[e];
  }
  return total;
}
const forInSumDigits = forInSum(uniqueDigits);
console.log("For...in으로 중복 제거한 랜덤 숫자 배열의 합 = " + forInSumDigits);
// for문으로 배열의 있는 요소들 더하는 함수
function forSum(digits) {
  let total = 0;
  for (i = 0; i < digits.length; i++) {
    total += digits[i];
  }
  return total;
}

const forSumDigits = forSum(uniqueDigits);
console.log(
  // console.log(total) +
  "For문으로 중복 제거한 랜덤 숫자 배열의 합 = " + forSumDigits
);
console.log(
  "---------------------------------------------------------------------------"
);
const str2 = `abcde`;
// console.log(typeof str2);
const n = 134;
// console.log(str2);

// Array의 프로퍼티를 빌려서 str2의 값에 "-"을 추가하는 함수
function sumStr(m) {
  return Array.prototype.join.call(m, "-");
}

const sumSt = sumStr(str2);
console.log("Join() 메서드로 문자열에 '-'을 추가한 모습 = " + sumSt);
//   return console.log(plusHyphen);

const HYTHEN = "-";
const DELEMETER = "#";

// for...in 루프를 사용하여, str의 값에 "-"추가하는 함수
function forInStr(nameStr) {
  if (typeof nameStr === "string") {
    let hypened = "";
    const len = nameStr.length;

    for (const index in nameStr) {
      hypened += nameStr[index];
      if (index < len - 1) {
        hypened += HYTHEN;
      }
    }
    return hypened;
  } else {
    console.log("this is not string!");
    return [];
  }
}

const test = forInStr("abcde");
console.log(`for...in문으로 문자열에 '-'을 추가한 모습 = ` + test);
