function addToDo() {
  const todo = document.getElementById("todo");
  const article = document.createElement("article");
  todo.appendChild(article);
  article.className = "card";
  const header = document.createElement("header");
  article.append(header);
  header.innerText = "test";
  const div = document.createElement("div");
  article.append(div);
  div.className = "detail";
  div.innerText = "div";
}
