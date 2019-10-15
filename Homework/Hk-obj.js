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
  for (i = 0; i < students.length; i++) {
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
    for (i = 0; i < students.length; i++) {
      students[i].avgScore = parseInt(sumScoreArr[i] / 3);
    }
    return students;
  } else {
    return "";
  }
}

// console.log(sumScoreArr);

const addedProperty = addProperty(STUDENTS);
console.log(addedProperty);

const myJSON = JSON.stringify(STUDENTS);
console.log(myJSON);

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
  if (typeof students != "object") {
    return "";
  } else {
    // 여기가 왜 실행이 안되는지 궁금합니다.
    students.sort(function(a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; // 해석이 필요함
    });
  }
}

const test = sortingByStudentsId(STUDENTS);
// console.log(test);

// 유니코드 포인트 순서로 문자열을 비교하여 정렬하는 함수
function compareId(a, b) {
  return a.id - b.id;
}

function compareAvgScore(a, b) {
  return a.avgScore - b.avgScore;
}

const sortedStudentsById = STUDENTS.sort(compareId);
console.log(sortedStudentsById);

const sortedStudentsByAvgScore = STUDENTS.sort(compareAvgScore);
console.log(sortedStudentsByAvgScore);
