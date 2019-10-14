function addToDo(todo) {
  // const todo = document.getElementById("todo");
  const article = document.createElement("article");
  todo.appendChild(article);

  article.className = "card";
  article.id = "article";
  const header = document.createElement("header");
  article.append(header);
  header.id = "header";
  header.className = "change";
  const delbtn = document.createElement("button");
  const updateBtn = document.createElement("button");
  updateBtn.className = "update";
  updateBtn.innerText = "update";
  updateBtn.addEventListener("click", updateToDo);
  article.appendChild(updateBtn);

  delbtn.className = "delete";
  delbtn.innerText = "delete";
  article.appendChild(delbtn);
  delbtn.addEventListener("click", deleteListElement);
}
