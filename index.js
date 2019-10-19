import main from "./main";
import { bro } from "./bro";
import * as lib from "./chapter5";
import * as noty from "./noty";

console.log("index.js");
main();

export const bbb = lib.deleteUser;
export const ccc = noty.checkNoty;

document.querySelector("h1").textContent = bro(`Dev 성적표`);
document.querySelector("h1").style.textAlign = "center";

export function addNum() {
  if (document.body.style.backgroundColor === "snow") {
    document.body.style.backgroundColor = "#f3f3f3";
  } else {
    document.body.style.backgroundColor = "snow";
  }
}
