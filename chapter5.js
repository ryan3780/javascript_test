export function example5() {
  console.log("chapter5.js");
  const rr = document.getElementById("root");
  rr.style.visibility = "hidden";
  rr.innerText = `hell???`;
  rr.style.textAlign = "center";
  rr.style.marginTop = "10px";
  ren();
}

// 오름차순 내림차순 버튼들의 id 값을 가져오는 변수들
const engUpBtn = document.getElementById("eng-up");
const engDownBtn = document.getElementById("eng-down");
const historyUpBtn = document.getElementById("his-up");
const historyDownBtn = document.getElementById("his-down");
const korHistoryUpBtn = document.getElementById("kor-up");
const korHistoryDownBtn = document.getElementById("kor-down");

// 오름차순 내림차순 버튼들의 display ='none'을 구분하기 위한 배열
const idx = [1, 2, 3, 4, 5, 6];

const userList = [
  {
    name: "KIM",
    id: "20190002",
    englishScore: 90,
    historyScore: 50,
    KorHistoryScore: 70
  },

  {
    name: "KANG",
    id: "20190005",
    englishScore: 100,
    historyScore: 100,
    KorHistoryScore: 100
  },
  {
    name: "PARK",
    id: "20190001",
    englishScore: 20,
    historyScore: 30,
    KorHistoryScore: 40
  },
  {
    name: "HONG",
    id: "20190003",
    englishScore: 30,
    historyScore: 70,
    KorHistoryScore: 80
  },
  {
    name: "NA",
    id: "20190004",
    englishScore: 80,
    historyScore: 60,
    KorHistoryScore: 50
  }
];

function hideBtn(n) {
  if (n === 1) {
    engDownBtn.style.display = "none";
    historyDownBtn.style.display = "none";
    historyUpBtn.style.display = "none";
    korHistoryDownBtn.style.display = "none";
    korHistoryUpBtn.style.display = "none";
  }
  if (n === 2) {
    engUpBtn.style.display = "none";
    historyDownBtn.style.display = "none";
    historyUpBtn.style.display = "none";
    korHistoryDownBtn.style.display = "none";
    korHistoryUpBtn.style.display = "none";
  }
  if (n === 3) {
    engUpBtn.style.display = "none";
    engDownBtn.style.display = "none";
    historyDownBtn.style.display = "none";
    korHistoryDownBtn.style.display = "none";
    korHistoryUpBtn.style.display = "none";
  }
  if (n === 4) {
    engUpBtn.style.display = "none";
    engDownBtn.style.display = "none";
    historyUpBtn.style.display = "none";
    korHistoryDownBtn.style.display = "none";
    korHistoryUpBtn.style.display = "none";
  }
  if (n === 5) {
    engUpBtn.style.display = "none";
    engDownBtn.style.display = "none";
    historyUpBtn.style.display = "none";
    historyDownBtn.style.display = "none";
    korHistoryDownBtn.style.display = "none";
  }
  if (n === 6) {
    engUpBtn.style.display = "none";
    engDownBtn.style.display = "none";
    historyUpBtn.style.display = "none";
    historyDownBtn.style.display = "none";
    korHistoryUpBtn.style.display = "none";
  } else {
    return "";
  }
}

// 내림차순으로 영어성적으로 정렬하는 함수
function compareByEngScoreDesc(a, b) {
  return b.englishScore - a.englishScore;
}
//영어 성적을 오름차순으로 정렬하는 함수
function compareByEngScoreAsce(a, b) {
  return a.englishScore - b.englishScore;
}
//역사 성적을 내림차순으로 정렬하는 함수
function compareByHistoryScoreDesc(a, b) {
  return b.historyScore - a.historyScore;
}
//역사 성적을 오름차순으로 정렬하는 함수
function compareByHistoryScoreAsce(a, b) {
  return a.historyScore - b.historyScore;
}
//한국사 성적을 내림차순으로 정렬하는 함수
function compareByKorHistoryScoreDesc(a, b) {
  return b.KorHistoryScore - a.KorHistoryScore;
}
//한국사 성적을 오름차순으로 정렬하는 함수
function compareByKorHistoryScoreAsce(a, b) {
  return a.KorHistoryScore - b.KorHistoryScore;
}

// 영어성적을 오름차순 혹은 내림차순으로 정렬해주는 함수
function sortEngScore(list, index) {
  if (index === 0) {
    let sortedEngScoreDesc = list.sort(compareByEngScoreDesc);
    return sortedEngScoreDesc;
  } else {
    let sortedEngScoreAsce = list.sort(compareByEngScoreAsce);
    return sortedEngScoreAsce;
  }
}
// 역사성적을 오름차순 혹은 내림차순으로 정렬해주는 함수
function sortHistoryScore(list, index) {
  if (index === 0) {
    let sortedHistoryScoreDesc = list.sort(compareByHistoryScoreDesc);
    return sortedHistoryScoreDesc;
  } else {
    let sortedHistoryScoreAsce = list.sort(compareByHistoryScoreAsce);
    return sortedHistoryScoreAsce;
  }
}
//한국사 성적을 오름차순 혹은 내림차순으로 정렬해주는 함수
function sortKorHistoryScore(list, index) {
  if (index === 0) {
    let sortedKorHistoryScoreDesc = list.sort(compareByKorHistoryScoreDesc);
    return sortedKorHistoryScoreDesc;
  } else {
    let sortedKorHistoryScoreAsce = list.sort(compareByKorHistoryScoreAsce);
    return sortedKorHistoryScoreAsce;
  }
}

//영어성적을 내림차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showDescEngScore() {
  render(makeListToTable(sortEngScore(userList, 0)));
  hideBtn(idx[0]);
}

//영어성적을 오름차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showAsceEngScore() {
  render(makeListToTable(sortEngScore(userList, 1)));
  hideBtn(idx[1]);
}

//역사성적을 내림차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showDescHistoryScore() {
  render(makeListToTable(sortHistoryScore(userList, 0)));
  hideBtn(idx[2]);
}

//역사성적을 오름차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showAsceHistoryScore() {
  render(makeListToTable(sortHistoryScore(userList, 1)));
  hideBtn(idx[3]);
}

//역사성적을 내림차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showDescKorHistoryScore() {
  render(makeListToTable(sortKorHistoryScore(userList, 0)));
  hideBtn(idx[4]);
}

//역사성적을 오름차순으로 정렬된 성적표로 테이블로 만들어서 보여주는 함수
export function showAsceKorHistoryScore() {
  render(makeListToTable(sortKorHistoryScore(userList, 1)));
  hideBtn(idx[5]);
}

function compareById(a, b) {
  return a.id - b.id;
}

function sortId(list) {
  let b = list.sort(compareById);
  return b;
}

// console.log(studentsList());

export const makeListToTable = list =>
  list.map(
    (elm, index) => `<tr> 
    <td>${index + 1}</td>
    <td>${elm.name}</td>
    <td>${elm.id}</td>
    <td>${elm.englishScore}</td>
    <td>${elm.historyScore}</td>
    <td>${elm.KorHistoryScore}</td>
    <td><button class="btn btn-danger" onclick=index.deleteUser(${index})>삭제</button></td>
    </tr>`
  );

export function deleteUser(index) {
  userList.splice(index, 1);
  render(makeListToTable(userList));
}

export function render(table) {
  document.getElementById("test").innerHTML = table.join("");
}

// 해당 함수가 학생 리스트를 불러 옵니다.
export function ren() {
  sortId(userList);
  render(makeListToTable(userList));
}
