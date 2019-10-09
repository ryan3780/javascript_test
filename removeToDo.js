const header = document.querySelector("header");
const article = document.getElementsByTagName("article");
const del = document.getElementsByClassName("delete");

for (var i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deleteListElement);
}

function deleteListElement() {
  header.removeChild(header.childNodes[0]);
}
