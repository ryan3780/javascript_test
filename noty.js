const noty = document.getElementById("noty");
noty.innerHTML = `<table class= 'table table-hover table-striped'>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td id=sell>11시 주식 팔기</td>
<td><button class = 'btn btn-success' onclick = index.ccc(0)>확인</button></td></tr>
<tr><td id = buy>14시 주식 사기</td>
<td><button class = 'btn btn-success' onclick = index.ccc(1)>확인</button></td></tr>
</tbody>
</table>`;

function checkTime() {
  const date = new Date();
  const time = date.getHours();
  //   console.log(typeof time);
  if (time === 11) {
    confirm("Sell Stock");
  }
  if (time === 14) {
    confirm("Buy Stock");
  }
}

checkTime();

export function checkNoty(n) {
  const sell = document.getElementById("sell");
  const buy = document.getElementById("buy");

  if (n === 0) {
    sell.style.textDecoration = "line-through";
  } else {
    buy.style.textDecoration = "line-through";
  }
}
