// 로컬 저장소에 키랑 값이 있으면, 가져오고, 없으면 'admin'만 들어 있는 배열이 itemsArray가 된다
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// JSON형식으로 가져온다
let data = JSON.parse(localStorage.getItem('items'));

// 관리자 ID와 비밀번호를 체크 하는 함수
function checkIdAndPassword() {
    let id = document.getElementById('id');
    let password = document.getElementById('password');
    const create = document.getElementById('create');
    for (let k in data) {
        if (id.value === data[k].mail) {
            if (password.value === data[k].pw) {
                return location.href = 'http://localhost:1234/'
            }
        }
    }
    return alert("가입 해주세요."), create.focus();

}