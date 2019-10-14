/* Access an array's contents using bracket notation to retrieve data on command.*/

let myArray = ["a", "b", "c", "d"];

myArray[1] = "not b";

console.log(myArray);

/*NOTE:
In an array, each array item has an index. This index doubles as the position of that item in the array, 
and how you reference it. In JavaScript arrays are zero-indexed, meaning that the first element of an array 
is actually at the zeroth position, not the first. 
In order to retrieve an element from an array we can enclose an index in brackets and append it to the end 
of an array or to a variable which references an array object, known as bracket notation.*/
