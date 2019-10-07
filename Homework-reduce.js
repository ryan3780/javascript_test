const arr2 = [];
// console.log(Object.prototype.toString.call(arr2));
// console.log(typeof arr2);

function arrayToString(arr) {
    const str = arr.toString();
    const splitStr = str.split(",");
    const joinElement = splitStr.join(" , ");
    return document.write("[ " + joinElement + " ]");
}

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

makeArrayElement(arr2);
console.log("랜덤 숫자 배열 : " + arr2);

// Array.from() 메서드는 유사 배열 객체(arr2ay-like object)나반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
const removeOverlap = Array.from(new Set(arr2));
console.log("중복 제거한 랜덤 숫자 배열 : " + removeOverlap);
// console.log(Object.prototype.toString.call(removeOverlap));
// console.log(typeof removeOverlap);
console.log(
    "---------------------------------------------------------------------------"
);
// 단순히 .reduce() 내장 함수로 처리한 함수
function sum(array) {
    const sumElement = array.reduce((pre, val) => pre + val);
    console.log(
        "Reduce() 메서드로 중복 제거한 랜덤 숫자 배열의 합 = " + sumElement
    );
    return document.write(sumElement)
}

// sum(removeOverlap);

// for...in문으로 배열의 있는 요소들 더하는 함수
function forInSum(array) {
    let total = 0;
    for (const e in array) {
        total += array[e];
    }
    return document.write(total) + console.log("For...in으로 중복 제거한 랜덤 숫자 배열의 합 = " + total);
}

// forInSum(removeOverlap);

// for문으로 배열의 있는 요소들 더하는 함수
function forSum(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return document.write(total) + console.log("For문으로 중복 제거한 랜덤 숫자 배열의 합 = " + total);
}

//forSum(removeOverlap);
console.log(
    "---------------------------------------------------------------------------"
);
const str2 = `abcde`;
// console.log(typeof str2);
const n = 134;
// console.log(str2);

// Array의 프로퍼티를 빌려서 str2의 값에 "-"을 추가하는 함수
function sumStr(str) {
    const plusHyphen = Array.prototype.join.call(str, "-");
    console.log("Join() 메서드로 문자열에 '-'을 추가한 모습 = " + plusHyphen);
    return document.write(plusHyphen);
}

// sumStr(str2);

// for...in 루프를 사용하여, str의 값에 "-"추가하는 함수
function forInStr(str) {
    if (typeof str === "string") {
        let blankText = "";
        let hyphen = "-";
        let fullText = "";
        for (const s in str) {
            blankText = str[s];
            a = blankText.concat(hyphen);
            // console.log(a);
            fullText += a;
        }
        return document.write(fullText.slice(0, -1)) + console.log(
            "For...in으로 문자열에 '-'을 추가하고, 마지막 원소를 제거한 모습 = " +
            fullText.slice(0, -1)
        );
    } else {
        return console.log("this is not str2ing!");
    }
}

// forInStr(str2);