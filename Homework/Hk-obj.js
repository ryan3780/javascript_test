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
      KorHistoryScore: 40
    }
  ]
};

// 학생의 id를 빈 배열의 요소로 채우는 함수
function getStudentsId(students) {
  if (students.hasOwnProperty("Dev") != true) {
    // 객체 안에 배열을 생성해서, students.dev.hasOwnProperty('id')가 안되는데, 접근 할 방법이 있나요?
    return "";
  } else {
    const studentsId = [];
    for (i = 0; i < students.Dev.length; i++) {
      studentsId.push(students.Dev[i].id);
    }
    return studentsId;
  }
}

const studentsId = getStudentsId(students);
console.log(studentsId);

function changeIdToNumber(studentsId) {
  if (typeof studentsId != "string") {
    return "";
  }
  return studentsId;
}
const changedId = changeIdToNumber(students.Dev[0].id);
console.log(changedId);
