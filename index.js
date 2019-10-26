import main from "./main";
import { bro } from "./bro";
import * as lib from "./chapter5";
import * as noty from "./noty";

console.log("index.js");
main();

// 영어 성적으로 오름차순, 내림차순으로 보여주는 버튼 함수
export const sortedDescEngScore = lib.showDescEngScore;
export const sortedAsceEngScore = lib.showAsceEngScore;
//역사 성적으로 오름차순, 내림차순으로 보여주는 버튼 함수
export const sortedDescHistoryScore = lib.showDescHistoryScore;
export const sortedAsceHistoryScore = lib.showAsceHistoryScore;

//한국사 성적으로 오름차순, 내림차순으로 보여주는 버튼 함수
export const sortedDescKorHistoryScore = lib.showDescKorHistoryScore;
export const sortedAsceKorHistoryScore = lib.showAsceKorHistoryScore;

// 학생 성적표의 원하는 학생을 삭제하는 버튼에 사용 되는 함수
export const deleteUser = lib.deleteUser;
export const checkNoty = noty.checkNoty;

document.querySelector("h1").textContent = bro(`Dev 성적표`);
document.querySelector("h1").style.textAlign = "center";

export function addNum() {
  if (document.body.style.backgroundColor === "snow") {
    document.body.style.backgroundColor = "#f3f3f3";
  } else {
    document.body.style.backgroundColor = "snow";
  }
}

// //git contributions...다 날아가는데 왜그런거지;;
