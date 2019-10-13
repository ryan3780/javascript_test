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
        const b = document.createElement("header")
        a.prepend(b)
        b.id = "header"
        b.className = 'change'
        b.innerText = temp
        a.removeChild(document.getElementById('input'))
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
        if (b.value === temp) {
            console.log("same")
        }
    }
}