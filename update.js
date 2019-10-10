const update = document.getElementsByClassName("update");
const change = document.getElementsByClassName('change');

// register actions initially on existing elements
for (i = 0; i < update.length; i++) {
    update[i].addEventListener("click", updateToDo);

}
for (i = 0; i < change.length; i++) {
    change[i].addEventListener("click", changeTag);

}


function updateToDo() {
    this.parentElement.innerHTML = `<input type = text id = input onkeydown = changeTag()></input>`
}

function changeTag() {
    if (event.keyCode == 13) {
        const val = document.getElementById('input').value;
        temp = val;
        console.log("ddd")
        console.log(temp)
        const a = document.getElementById('article');
        const b = document.createElement('header');
        a.prepend(b);
        a.innerHTML = `<header id = header class = change>${temp}</header>`
            // b.innerHTML = `<header>123123123</header>`
        const delbtn = document.createElement("button")
        const updateBtn = document.createElement("button");
        updateBtn.className = "update"
        updateBtn.innerText = "update"
        updateBtn.addEventListener("click", updateToDo)
        a.appendChild(updateBtn)

        delbtn.className = "delete"
        delbtn.innerText = "delete"
        a.appendChild(delbtn);
        delbtn.addEventListener("click", deleteListElement);
    }
}