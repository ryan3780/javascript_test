import "./main.css";
import { example5 } from "./chapter5.js/";
import * as lib from "./chapter5";
import * as clock from "./clock";
import * as noty from "./noty";

export default () => {
    console.log("main.js");
    example5();
    lib;
    clock;
    noty;

};