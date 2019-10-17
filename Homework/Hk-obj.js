// 모두 같은 신입생이며, 같은 Dev학과이고, 1 ~ 5번째 학생들이다.
const students = {
  Dev: [
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
      historyScore: 90,
      KorHistoryScore: 50
    }
  ],
  Infra: [
    {
      name: "OH",
      id: "2007001",
      englishScore: 10,
      historyScore: 10,
      KorHistoryScore: 10
    }
  ]
};

// 매개변수에 students.Dev라는 인자를 넣을 수가 없고, 자주쓰기 때문에 글로벌로 선언함
const STUDENTS = students.Dev;

// 학생들 모든 점수를 합하는 함수
function sumScore(students) {
  let total = [];
  for (let i = 0; i < students.length; i++) {
    total[i] =
      students[i].englishScore +
      students[i].historyScore +
      students[i].KorHistoryScore;
  }
  return total;
}

const sumScoreArr = sumScore(STUDENTS);

// students객체를 평균 점수로 sort하기 위해, 해당 객체에 프로퍼티를 추가하는 함수
// 원본을 훼손하면 안되지만, 방법을 찾을 수 없기에, 객체에 프로퍼티를 추가하는 함수를 구현
function addProperty(students) {
  if (students.hasOwnProperty("avgScore") === false) {
    for (let i = 0; i < students.length; i++) {
      students[i].avgScore = parseInt(sumScoreArr[i] / 3);
    }
    return students;
  } else {
    return "";
  }
}

const addedProperty = addProperty(STUDENTS);
console.log(addedProperty);

// JSON으로 바꿔보기
const myJSON = JSON.stringify(STUDENTS);
console.log(myJSON);

// JSON을 원래 상태로 돌려 놓기
const myEval = eval(myJSON);
console.log(myEval);

// 아스키 코드로 객체를 정렬 하는 방법
// const sortedStudentsById = students.Dev.sort(function(a, b) {
//   return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
// });
// console.log(sortedStudentsById);

// 학생의 id를 빈 배열의 요소로 채우는 함수
// function getStudentsId(students) {
//   let studentsId = [];
//   for (i = 0; i < students.length; i++) {
//     if (students[i].hasOwnProperty("id") === false) {
//       return "";
//     } else {
//       for (i = 0; i < students.length; i++) {
//         studentsId.push(students[i].id);
//       }
//       return studentsId;
//     }
//   }
// }

// const studentsId = getStudentsId(STUDENTS);
// console.log(studentsId);

// function sortingStudentsId(studentsId) {
//   if (Array.isArray(studentsId) != true) {
//     return "";
//   }
//   return studentsId.sort(function(a, b) {
//     return a - b;
//   });
// }

// const comparedStudentsIdArr = sortingStudentsId(studentsId);
// console.log(comparedStudentsIdArr);

// students 객체를 'id'값으로 정렬 하는 함수
function sortingByStudentsId(students) {
  console.log(students.length);
  if (students.length > 0) {
    // 여기가 왜 실행이 안되는지 궁금합니다.
    students.sort(function(a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; // 해석이 필요함
    });
  }
  return students;
}

const test = sortingByStudentsId(STUDENTS);
console.log(test);

// 유니코드 포인트 순서로 문자열을 비교하여 정렬하는 함수
function compareId(a, b) {
  return a.id - b.id;
}

function compareAvgScore(a, b) {
  return a.avgScore - b.avgScore;
}

// ID 값으로 정렬 하는 문구
const sortedStudentsById = STUDENTS.sort(compareId);
console.log(sortedStudentsById);

// 평균이 낮은 사람부터 정렬 하는 문구
// const sortedStudentsByAvgScore = STUDENTS.sort(compareAvgScore);
// console.log(sortedStudentsByAvgScore);

// ID html에 뿌려주기
const st1Id = () => {
  document.write(STUDENTS[0].id);
};

function st2Id() {
  return document.write(STUDENTS[1].id);
}
function st3Id() {
  return document.write(STUDENTS[2].id);
}
function st4Id() {
  return document.write(STUDENTS[3].id);
}
function st5Id() {
  return document.write(STUDENTS[4].id);
}

// 이름 html에 뿌려주기
function st1Name() {
  return document.write(STUDENTS[0].name);
}
function st2Name() {
  return document.write(STUDENTS[1].name);
}
function st3Name() {
  return document.write(STUDENTS[2].name);
}
function st4Name() {
  return document.write(STUDENTS[3].name);
}
function st5Name() {
  return document.write(STUDENTS[4].name);
}

// 영어 성적 html에 뿌려주기
function st1EngScore() {
  return document.write(STUDENTS[0].englishScore);
}
function st2EngScore() {
  return document.write(STUDENTS[1].englishScore);
}
function st3EngScore() {
  return document.write(STUDENTS[2].englishScore);
}
function st4EngScore() {
  return document.write(STUDENTS[3].englishScore);
}
function st5EngScore() {
  return document.write(STUDENTS[4].englishScore);
}

// 역사 성적
function st1HistoryScore() {
  return document.write(STUDENTS[0].historyScore);
}
function st2HistoryScore() {
  return document.write(STUDENTS[1].historyScore);
}
function st3HistoryScore() {
  return document.write(STUDENTS[2].historyScore);
}
function st4HistoryScore() {
  return document.write(STUDENTS[3].historyScore);
}
function st5HistoryScore() {
  return document.write(STUDENTS[4].historyScore);
}

//한국사 성적
function st1KorHistoryScore() {
  return document.write(STUDENTS[0].KorHistoryScore);
}
function st2KorHistoryScore() {
  return document.write(STUDENTS[1].KorHistoryScore);
}
function st3KorHistoryScore() {
  return document.write(STUDENTS[2].KorHistoryScore);
}
function st4KorHistoryScore() {
  return document.write(STUDENTS[3].KorHistoryScore);
}
function st5KorHistoryScore() {
  return document.write(STUDENTS[4].KorHistoryScore);
}

// 영어성적과 역사성적 비교 하는 함수
function checkEngScoreAndHistoryScore(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].historyScore > students[i].englishScore) {
      arr.push(students[i]);
    }
  }
  return arr;
}

const higherHistoryScoreThanEngScore = checkEngScoreAndHistoryScore(STUDENTS);
console.log(higherHistoryScoreThanEngScore);
