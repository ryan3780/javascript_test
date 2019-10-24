// string을 배열로 바꾸고, 뒤집고, "-"을 추가해서 다시 string으로 합치는 함수
const a = "abcd";

function reverseString(str) {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("-");
  makeLine();
  return joinArray;
}

const b = reverseString(a);
console.log(
  b + " => string을 배열로 만들고, 뒤집어서, 다시 '-'을 넣고 합친 것"
);

// arr을 .reverse()메서드로 뒤집고, 해당 값을 brr에 넣어줌
const point = [10, 20, 30];
const arr = ["국어", "영어", "수학"];
makeLine();
// 객체를 만들기 위해, 본래의 배열을 오염을 피하려고 .slice()로 복사해서 crr로 만들어줌
const crr = arr.slice();
console.log(crr, ` 본래의 배열을 .slice()로 복사한 배열`);
makeLine();
// 본래의 배열을 뒤집기 위한 .reverse()메서드 사용
const brr = arr.reverse();
console.log(brr, ` arr을 뒤집은 brr 배열`);

// 2개의 배열을 객체로 만드는 함수
function makeObj(key, val) {
  let total = {};
  for (i = 0; i < arr.length; i++) {
    total[key[i]] = val[i];
  }
  makeLine();
  return total;
}

const total = makeObj(crr, point);
console.log(total);
makeLine();
//객체를 JSON형식으로 만드는 방법
const myJson = JSON.stringify(total);
console.log(myJson, "JSON 형식으로 ");
makeLine();
// 새로운 변수가 없다면, eval()은 실행 되지 않는다. 그래서 let z; 를 사용
let z;
const myEval = eval("z = " + myJson);
console.log(z, "eval로 JSON 형식을 다시 복귀");

function makeLine() {
  console.log(
    `---------------------------------------------------------------------`
  );
}

const cl = "국어";

switch (cl) {
  case "국어":
    console.log("국어");
  // break;

  case "영어":
    console.log("영어");
    break;

  case "수학":
    console.log("math");
    break;
  default:
    console.log("nonononono");
}

function foo() {
  try {
    throw 42;
  } finally {
    console.log("hell");
  }
  console.log("??????");
}
console.log(foo());
