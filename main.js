import "./main.css";
import { example5 } from "./chapter5.js/";
import * as lib from "./chapter5";

export default () => {
  console.log("main.js");
  example5();
  console.log(lib.userList);
};
