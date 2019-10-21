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
<td>
<div class="checks etrans" style="bottom: 15px;">
<input type = checkbox  id="ex_chk3" name = agree onclick = index.ccc() >
<label for="ex_chk3"></label></input>
</td>
</div>
</tr>
<tr>
<td id=buy>14시 주식 팔기</td>
<td>
<div class="checks etrans" style="bottom: 15px;">
<input type = checkbox  id="ex_chk4" name = agree onclick = index.ccc() >
<label for="ex_chk4"></label></input>
</td>
</div>
</tr>
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

export function checkNoty() {
    const sell = document.getElementById("sell");
    const buy = document.getElementById("buy");
    const chk = document.getElementsByName('agree')

    if (chk[0].checked === true) {
        sell.style.textDecoration = 'line-through'

    }
    if (chk[0].checked === false) {
        sell.style.textDecoration = 'none'
    }

    if (chk[1].checked === true) {
        buy.style.textDecoration = 'line-through'

    }
    if (chk[1].checked === false) {
        buy.style.textDecoration = 'none'
    }

}