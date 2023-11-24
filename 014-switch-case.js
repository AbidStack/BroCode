let grade = `D`;
switch (grade) {
    case `A`:
        console.log(`You did great`);        
        break;
    case `B`:
        console.log(`You did good`);
        break;
    case `C`:
        console.log(`You did okay!`);
        break;
    case `D`:
        console.log(`You passed... barely!`);
        break;
    case `F`:
        console.log(`You Failed!!!`);
        break;

    default:
        console.log(grade, `isn't a grade...`)
        break;
}

let score = `101`;
switch (true){
    case score > 100 || score < 0:
        console.log(`Please enter a valid score!!!`)
        break;
    case score >= 80:
        console.log(`You got A+...!`)
        break;
    case score >= 70:
        console.log(`You got A...!`)
        break;
    case score >= 60:
        console.log(`You got B...!`)
        break;
    case score >= 50:
        console.log(`You got C...!`)
        break;
    case score >= 33:
        console.log(`You got D...!`)
        break;
    case score < 33:
        console.log(`You failed...!`)
        break;
    default:
        console.log(score, `isn't a valid score...`)
        break;
}