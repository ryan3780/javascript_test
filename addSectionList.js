function addToDo() {
    const todo = document.getElementById("todo");
    const article = document.createElement("article");
    todo.appendChild(article);
    article.className = "card";
    article.id = "article"
    const input = document.createElement("input");
    article.append(input);
    input.id = "input"
    input.className = "dodo"
    input.onkeydown = changeTag();
    input.value = "Do that thang"
    input.addEventListener('keypress', changeTag)
    const delbtn = document.createElement("button")
    const updateBtn = document.createElement("button");
    updateBtn.className = "update"
    updateBtn.innerText = "update"
    updateBtn.addEventListener("click", updateToDo)
    article.appendChild(updateBtn)
    delbtn.className = "delete"
    delbtn.innerText = "delete"
    article.appendChild(delbtn);
    delbtn.addEventListener("click", deleteListElement);

}