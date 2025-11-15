function sum(a, b) {
    let total = 0;
    // for(let key in arguments) {
    //     total += arguments[key];
    // }
    // for(let key of Object.keys(arguments)) {
    //     total += arguments[key];
    // }
    for(let val of arguments) {
        total += val;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));