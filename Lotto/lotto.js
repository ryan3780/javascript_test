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

const blank = lotArr.map(element => {
    return " " + element + " ";
});

const lottoNumberA = blank.slice(0, 6);
const lottoNumberB = blank.slice(6, 12);
const lottoNumberC = blank.slice(12, 18);
const lottoNumberD = blank.slice(18, 24);
const lottoNumberE = blank.slice(24, 30);

// check(a);
// console.log(a);

function change(arr) {
    const a = arr.sort(compareNum);
    const aa = a.toString();
    const aaa = aa.split(",").join("/");
    return document.write(aaa);
}

// 필요 없는 부분이 있지 않나요?? 2번씩 체크를 한다거나??
function check(arr) {
    const base = [...new Set(arr)];
    // console.log(base);

    // 중복으로 인해서, 배열의 원소가 모자르면 채우는 조건문
    if (base.length !== 6) {
        const random = " " + Math.floor(Math.random() * 45 + 1) + " ";
        const chRandom = random.toString();
        const newNum = [...base, chRandom];
        const lotto = [...newNum];
        if (lotto.length === 5) {
            const sRandom = " " + Math.floor(Math.random() * 45 + 1) + " ";
            const str = sRandom.toString();
            const realLotto = [...lotto, str];
            return check(realLotto);
        }
        return check(lotto);
    } else {
        const chbase = [...base];
        // console.log(chbase);
        return change(chbase);
    }
}