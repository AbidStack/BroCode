for (i = 0; i <= 20; i++) {
    if (i == 13) {
        continue;
        console.log(`continue will skip if condition matched...`);
    }
    if (i == 19) {
        break;        
    }
    console.log(i)
}