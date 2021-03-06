// Regex()로 공백 제거, e-mail 형식인지 확인, 비밀번호 길이 : 8 & 대, 소문자 특수 기호 넣기 // indexof 사용하기

// 특수 기호 쓰지 말라고 선언한 notUse 변수
const notUse = `([^\~\!\@\#\%\^\&\*\(\) \{ \ } \[\, \.\<\>\; \: \'\"\]\\\=\+\_\-])`;

// 대,소문자, 숫자 가능 2~8자리만 + @ + 소문자 가능 2~8자리만 + . + 소문자 가능 2~6자리만
const checkEmail = /^[a-z0-9A-Z]{2,8}@([a-z]{2,8})+\.([a-z]{2,6})+$/g;
// 공백 체크 하는 정규식
const checkSpace = /\s/g;

const mail = `Ele3780@naver.com`;

// 공백 확인 + 이메일 형식이 맞는지 체크 하는 함수
function checkingEmail(str) {
    if (str.search(checkSpace) === -1 && checkEmail.test(str) === true) {
        return console.log("사용 가능한 이메일 형식입니다 : " + str);
    } else {
        return console.log("사용 불가한 이메일입니다.");
    }
}
checkingEmail(mail);
// console.log(mail.search(/\s/g));
// console.log(/\s/g.exec(mail));
// console.log(mail.search(checkEmail));
// console.log(checkEmail.test(mail));

const password = `abcDe!@#`;
//대,소문자, 특수기호 등 8자리만 허용하는 정규식
const passwordRegEx = /^[a-z0-9A-Z\~\!\@\#\%\^\&\*\(\)\{\}\[\,\.\<\>\;\:\'\"\]\\\=\+\_\-]{8}$/g;
// console.log(passwordRegEx.test(password));

console.log("----------------------------&&-----------------------------");

// 비밀번호 공백 + 형식이 맞는지 체크 하는 함수
function checkingPassword(pw) {
    let result = passwordRegEx.test(pw);
    if (result) {
        console.log("사용 가능한 비밀번호 형식입니다 : " + pw);
    } else {
        console.log("사용 불가한 비밀번호 입니다.");
    }
}
checkingPassword(`abcDe!@#`);
checkingPassword(`abcDe!@#`); // 한번 더 실행하면 사용 불가로....