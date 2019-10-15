function popShift(arr) {

  // removes an element from the end of an array
  let popped = arr.pop();
  
  // removes an element from the beginning of an array
  let shifted = arr.shift();
  
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));
