// 관리자 ID와 비밀번호를 체크 하는 함수
const data = JSON.parse(localStorage.getItem('items'))

function checkIdAndPassword() {
    let id = document.getElementById('id');
    let password = document.getElementById('password')
    for (let k in data) {
        if (id.value === data[k].mail) {
            if (password.value === data[k].pw) {
                return location.href = 'index.htm'
            }
        }
    }
    return console.log("plz join")

}