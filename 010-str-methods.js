let userName = ` Mohammad Abidur Rahman Abid `;
userName = userName.trim();

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf(`n`));
console.log(userName.lastIndexOf(`A`));
console.log(userName.toUpperCase()); 
console.log(userName.toLowerCase());
console.log(userName.replaceAll(` `, `.`));
console.log(userName.replace(`.`, ``));
console.log(userName.slice(0, userName.indexOf(` `)));
console.log(userName.slice(userName.lastIndexOf(` `)+1, userName.length));