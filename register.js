//여기에 적혀 있는 것은 사용할 수 없음
const notUse = `([^\~\!\@\#\%\^\&\*\(\) \{ \ } \[\, \.\<\>\; \: \'\"\]\\\=\+\_\-])`;
// 대,소문자, 숫자 가능 2~8자리만 + @ + 소문자 가능 2~8자리만 + . + 소문자 가능 2~6자리만
const checkEmail = /^[a-z0-9A-Z]{2,8}@([a-z]{2,8})+\.([a-z]{2,6})+$/g;
// 공백 체크 하는 정규식
const checkSpace = /\s/g;
//대,소문자, 특수기호 등 8자리만 허용하는 정규식
const passwordRegEx = /^[a-z0-9A-Z\~\!\@\#\%\^\&\*\(\)\{\}\[\,\.\<\>\;\:\'\"\]\\\=\+\_\-]{8}$/g;

const mail = document.getElementById('mail');
const password = document.getElementById('password');
const Repassword = document.getElementById('RePassword')

let userMail = [{ mail: 'admin', pw: 'admin' }]
localStorage.setItem('items', JSON.stringify(userMail))
let data = JSON.parse(localStorage.getItem('items'))


data.map((item) => {
    console.log(item)
})

// localstorage에 가입자들의 메일과 비밀번호 저장하기
function addMailAndPw() {

    let newUser = {}
    email = mail.value;
    pw = password.value;
    newUser.mail = email;
    newUser.pw = pw
    userMail.push(newUser)

    localStorage.setItem('items', JSON.stringify(userMail))
    let data = JSON.parse(localStorage.getItem('items'))

    return userMail, console.log(data)
}

// 메일 형식, 비밀번호 형식 체크하는 함수
function checkingEmail(email) {

    email = mail.value;
    pw = password.value;
    re = Repassword.value

    if (email.search(checkSpace) === -1 && checkEmail.test(email) === true) {
        checkingPassword(pw)
        checkingRePassword(re)
        addMailAndPw()
        return console.log("사용 가능한 이메일 형식입니다 : " + email);
    } else {
        alert("이메일 형식이 아닙니다.")
        return console.log("사용 불가한 이메일입니다.");
    }

}

// 비밀번호 체크 하는 함수 
function checkingPassword(pw) {
    let result = passwordRegEx.test(pw);
    if (result) {
        return console.log("사용 가능한 비밀번호 형식입니다 : " + pw);
    } else {
        return console.log("사용 불가한 비밀번호 입니다.");
    }
}
// 입력한 비밀번호가 같은 값인지, 체크 하는 함수
function checkingRePassword(re) {
    if (re === pw) {
        return console.log("same")
    } else {
        return alert('비밀번호가 일치하지 않습니다.')
    }

}