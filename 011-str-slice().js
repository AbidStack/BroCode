let userName = `Shah Abidur Rashid Saleh`;
let firstName = userName.slice(0, userName.indexOf(` `));
let lastName = userName.slice(userName.lastIndexOf(` `)+1, userName.length);

console.log(firstName);
console.log(lastName);