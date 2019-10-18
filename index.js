import main from "./main";
import { bro } from "./bro";


main();

document.querySelector("h1").textContent = bro(`Dev 성적표`);
document.querySelector("h1").style.textAlign = "center";