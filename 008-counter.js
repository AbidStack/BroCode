/*
    label id="countLabel">0</label>
    <div id="countDiv">
        <button id="increaseBtn">increase</button>
    <button id="resetBtn">reset</button>
    <button id="decreaseBtn">decrease</button>
    </div>
*/

let count = 0;
document.getElementById(`increaseBtn`).onclick = function(){
    count += 1;
    document.getElementById(`countLabel`).innerHTML = count;
}

document.getElementById(`resetBtn`).onclick = function(){
    count = 0;
    document.getElementById(`countLabel`).innerHTML = count;
}
document.getElementById(`decreaseBtn`).onclick = function(){
    count -= 1;
    document.getElementById(`countLabel`).innerHTML = count;
}