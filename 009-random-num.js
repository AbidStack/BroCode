/* 

<p id="aLabel"></p>
<p id="bLabel"></p>
<p id="cLabel"></p>
<p id="dLabel"></p>
<p id="eLabel"></p>
<p id="fLabel"></p>
<button type="button" id="roll">Roll</button> 

*/

let a;
let b;
let c;
let d;
let e;
let f;

document.getElementById(`roll`).onclick = function(){
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    c = Math.floor(Math.random() * 6) + 1;
    d = Math.floor(Math.random() * 6) + 1;
    e = Math.floor(Math.random() * 6) + 1;
    f = Math.floor(Math.random() * 6) + 1;

    document.getElementById(`aLabel`).innerHTML = a;
    document.getElementById(`bLabel`).innerHTML = b;
    document.getElementById(`cLabel`).innerHTML = c;
    document.getElementById(`dLabel`).innerHTML = d;
    document.getElementById(`eLabel`).innerHTML = e;
    document.getElementById(`fLabel`).innerHTML = f;
    
}