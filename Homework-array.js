const arr = []; // 빈 배열 생성

// 숫자가 작은 순서로 정렬 하는 함수
function compareNum(a, b) {
  return a - b;
}

// 0~99까지 10개의 숫자를 생성하고, 빈 배열에 push 및 정렬 하는 함수
function sixTimes(array) {
  // 방어 코드 => "배열"이라면, 콘솔에 문구 출력
  if (Array.isArray(array) === true) {
    console.log("Starting");
    for (i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 100);
      array = arr.push(randomNum);
    }
    array = arr.sort(compareNum);
  }
  return array;
}

sixTimes(arr);
// Set메서드로 중복 제거
const setArr = [...new Set(arr)];

// Set이 되버린 arr을 다시 Array로 변경
const arrayArr = [...setArr];
console.log(arr);
console.log(arrayArr);

// 0 ~ 5까지의 index를 자르기
const zeroToFive = arrayArr.slice(0, 5);
console.log(zeroToFive);

// 3 ~ 7까지의 index를 자르기
const threeToSeven = arrayArr.slice(3, 7);
console.log(threeToSeven);
