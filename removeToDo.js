const del = document.getElementsByClassName("delete");

// register actions initially on existing elements
for (i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deleteListElement);
}

function deleteListElement() {
  this.parentElement.remove(); // remove parent, since button is child
  console.log(this);
}

// for문으로 사용 했을 때, 제가 원하는 요소들만 지워지는 이유가 무엇인가요?? 루프가 이해가 안됩니다.
// 추측으로는, 페이지가 로드 될 때, 이미 있는 것들을 차례대로 0번부터 1,2,3...이렇게 마치 유사배열 요소들처럼 보입니다.
// 어느 시점에 함수가 돌아 가는지, html이 어떻게 돌아가는지도 알아야 하는거 같은데 맞나요?
