/*
	Write a function that evaluates a number to see if it is even or not and returns false or true

	source: Eloquent Javascript book
*/ 

let isEven = function (n) {
  if (n === 0) return true;
  else if (n === 1 || n === -1) return false;
  else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));	
console.log(isEven(75));