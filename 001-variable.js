let age;

age = 32;
age = age + 1;
age += 1;

console.log(age);
console.log("Your are", age, "years old...!!!")
console.log(`Your age is ${age}...`)

let studentsName;
let firstName;
let lastName;

firstName = `Mohammad `;
lastName = `Abid`;
studentsName = firstName + lastName;

console.log(studentsName);
console.log("Hello", studentsName, ".");
console.log(`Welcome ${studentsName}.`);



let student;
let worker;

student = true;
worker = false;

console.log(student);
console.log(worker);
console.log("Student:", student);
console.log("Worker:", worker);

document.getElementById("studentsName").innerHTML = `Your name is ${studentsName}...`;
document.getElementById("age").innerHTML = `You're ${age} years old...`
document.getElementById('student').innerHTML = `You're a student: ${student}`;