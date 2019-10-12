const update = document.getElementsByClassName("update");

// register actions initially on existing elements
for (i = 0; i < update.length; i++) {
    update[i].addEventListener("click", updateToDo);
}

const change = document.getElementsByClassName("change");

for (i = 0; i < change.length; i++) {
    change[i].addEventListener("click", changeTag);
}

function updateToDo() {
    this.parentElement.innerHTML = `<input type = text id = input onkeydown = changeTag()></input>`;
}

function changeTag() {
    if (event.keyCode == 13) {
        const val = document.getElementById("input").value;
        temp = val;
        console.log(temp);
        const a = document.getElementById("article")
        const delInput = document.getElementById('header');
        a.remove(delInput);
        document.getElementsByClassName('change').value = temp;
        document.innerHTML = `<header id=header class = change>${temp}</header>`
        const c = document.createElement("button");
        c.className = "update";
        c.innerText = "update";
        c.addEventListener("click", updateToDo);
        a.append(c);
        const d = document.createElement("button");
        d.className = "delete";
        d.innerText = "delete";
        a.append(d);
        d.addEventListener("click", deleteListElement);
        // b.innerHTML = `<header>123123123</header>`
    }
}