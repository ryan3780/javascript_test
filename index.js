import main from "./main";
import { bro } from "./bro";
import * as lib from "./chapter5";

console.log("index.js");
main();

export const aaa = lib.userList;
export const bbb = lib.deleteUser;
console.log(bbb);
document.querySelector("h1").textContent = bro(`Dev 성적표`);
document.querySelector("h1").style.textAlign = "center";

export let a = 0;
export function del() {
  a++;

  return a, console.log(a);
}
