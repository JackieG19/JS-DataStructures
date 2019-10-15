function mixedNumbers(arr) {
    
    // adds elements to the beginning of an array
    arr.unshift("I", 2, "three");
    
    // adds elements to the end of an array
    arr.push(7, "VIII", 9);
    
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
