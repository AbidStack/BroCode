for (i = 0; i <= 20; i++) {
    if (i == 13) {
        continue;
        // `continue will skip the number if condition matched...`
    }
    if (i == 19) {
        break;        
        // `break will stop the loop if condition matched...`
    }
    console.log(i)
}