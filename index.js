import main from "./main";
import { bro } from "./bro";

main();
document.querySelector("h1").textContent = bro(`How is it going`);
document.querySelector("h1").style.textAlign = "center";
