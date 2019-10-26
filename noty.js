const notyList = noticeList();

function noticeList() {
  return ["11시 주식 팔기", "14시 주식 사기"];
}

function makeNotyToTable(list) {
  const table = list.map(
    (elm, index) => `<tr> 
    <td id = ${index}>${elm}</td>
    <td>
    <div class="checks etrans" style="bottom: 15px;">
    <input type = checkbox  id="ex_chk${index +
      3}" name = agree onclick = index.checkNoty(${index}) >
    <label for="ex_chk${index + 3}" ></label>
    </input>
    </td>
    </tr>`
  );
  return table;
}

function showTable(table) {
  const t = table.join("");
  document.getElementById("noty").innerHTML = t;
}

function render() {
  const list = makeNotyToTable(notyList);
  showTable(list);
}

render();

function checkTime() {
  const date = new Date();
  const time = date.getHours();

  if (time === 11) {
    confirm("Sell Stock");
  } else if (time === 13) {
    confirm("Buy Stock");
  }
  return;
}

// checkTime();

export function checkNoty() {
  const zero = document.getElementById("0");
  const one = document.getElementById("1");
  const chk = document.getElementsByName("agree");

  if (chk[0].checked === true) {
    zero.style.textDecoration = "line-through";
  }
  if (chk[0].checked === false) {
    zero.style.textDecoration = "none";
  }

  if (chk[1].checked === true) {
    one.style.textDecoration = "line-through";
  }
  if (chk[1].checked === false) {
    one.style.textDecoration = "none";
  }
}
