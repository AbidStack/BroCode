/*

    <label for="myCheckbox">subscribe</label>
    <input type="checkbox" id="myCheckbox"><br>
    

    <label for="card">Which card do you want to use for payment?</label><br>
        <input type="radio" name="card" id="visaBtn"><label for="visaBtn">Visa</label><br>
        <input type="radio" name="card" id="mastercardBtn"><label for="mastercardBtn">Mastercard</label><br>
        <input type="radio" name="card" id="BankBtn"><label for="BankBtn">Bank Account</label><br>
    <button type="submit" id="submit">submit</button><br>
*/

const myCheckbox = document.getElementById(`myCheckbox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardBtn`);
const BankBtn = document.getElementById(`BankBtn`);

document.getElementById(`submit`).onclick = function(){    
    if(myCheckbox.checked){
        console.log(`Subscribed`)
    }
    else{
        console.log(`Plz subscribe...`)
    }

    if (visaBtn.checked) {
        console.log(`visa card directing...`);        
    } else if (mastercardBtn.checked) {
        console.log(`master card directing...`);        
    } else if (BankBtn.checked) {
        console.log(`bank directing`)
    } else {
        console.log(`Payment Method hasn't been selected...`)
    }

}
