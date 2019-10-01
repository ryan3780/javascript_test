const lotArr = [];

function compareNum(a, b) {
  return a - b;
}

function makeNum() {
  for (j = 0; j < 6; j++) {
    for (i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 45 + 1);
      lotArr.push(randomNum);
    }
  }
}
makeNum();

// console.log(lotArr);

const A = lotArr.slice(0, 6);
const AA = A.sort(compareNum);
const B = lotArr.slice(6, 12);
const BB = B.sort(compareNum);
const C = lotArr.slice(12, 18);
const CC = C.sort(compareNum);
const D = lotArr.slice(18, 24);
const DD = D.sort(compareNum);
const E = lotArr.slice(24, 30);
const EE = E.sort(compareNum);
console.log(AA, BB, CC, DD, EE);

function change(arr) {
  const a = arr.sort(compareNum);
  const aa = a.toString();
  const aaa = aa.split(",").join("");
}

change(A);
console.log(A);

const mySet = [1, 2, 3, 4, 5, 6];
const mm = [...new Set(mySet)];
const aa = [...mm];
function ch(arr) {
  arr = aa;
}

console.log(aa);
aa.splice(aa.indexOf(1), 1, mySet);
console.log(aa);
