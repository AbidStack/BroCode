/*  
  <label for="opposite">Enter opposite length:</label>
    <input type="number" name="opposite" id="opposite">
    <br>

    <label for="adjacent">Enter adjacent length:</label>
    <input type="number" name="adjacent" id="adjacent">
    <br>
    
    <input type="submit" id="submit">

    <p id="hypotensue"></p>

*/

document.getElementById(`submit`).onclick = function(){
    
    let opposite = document.getElementById(`opposite`).value;
    opposite = Number(opposite);
    let adjacent = document.getElementById(`adjacent`).value;
    adjacent = Number(adjacent);
    // console.log(opposite, adjacent);
    const hypotenuse = Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
    console.log(hypotenuse);
    document.getElementById(`hypotensue`).innerHTML = `The value of hypotenuse is: ${hypotenuse}.`;

}











