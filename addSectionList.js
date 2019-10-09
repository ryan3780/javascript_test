function addToDo() {
  const todo = document.getElementById("todo");
  const article = document.createElement("article");
  todo.appendChild(article);
  article.className = "card";
  const header = document.createElement("header");
  article.append(header);
  //   header.className = "delete";
  header.innerHTML = `<button class = delete onclick=deleteListElement()>delete</button>`;
  const div = document.createElement("div");
  article.append(div);
  div.className = "detail";
  div.innerText = "div";
}
