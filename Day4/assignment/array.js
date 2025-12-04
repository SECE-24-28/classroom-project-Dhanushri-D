//1.Create Array From Arguments
// Q1:
// Create a function createArray that takes 3 arguments and returns an array 
// containing those three values.Run the function and print the result.
// Dynamic Number of Arguments

function createArray(p1,p2,p3) {
    arr1=[p1,p2,p3];
    let aa=arr1.map((el,ind)=>el+ind);
    return arr1;
}
console.log(createArray(1,2,3));

// Push Only Strings
// Q2:
// Create a function stringOnly that accepts any number of arguments, 
// but returns an array containing only the arguments that are strings.
function stringOnly(...para) {
    let arr2=[];
    for(let p of para){
        if(typeof p === "string"){
            arr2.push(p);
        }
    }
    return arr2;
}
console.log(stringOnly(1,"s","jack"));
console.log(stringOnly(1,2,"rose"));

// Q3:Create Array of Squares
// Create a function squareNumbers that accepts numbers as 
// arguments and returns an array of each number squared.
// Example:
// squareNumbers(2, 3, 4) → [4, 9, 16]
 function squareNumbers(...params) {
    let arr3=[];
    for(let n of params){
        arr3.push(n*n);
    }
    return arr3;
 }
console.log( squareNumbers(2,3,4));

// Q4:Filter Even Numbers
// Create a function getEvenNumbers that accepts numbers as arguments
//  and returns an array containing only even numbers.

function getEvenNumbers(...params) {
    let arr4=[];
    for(let n of params){
        if(n%2 == 0)
            arr4.push(n);
    }
    return arr4;
 }
console.log(getEvenNumbers(2,3,4,5,6,7,8));