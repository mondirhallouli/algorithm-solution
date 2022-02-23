/*

challenge from Leetcode:

https://leetcode.com/problems/roman-to-integer/

I ==> 1     | IV ===> 4
V ==> 5     | IX ==> 9
X ==> 10    | XL ==> 40
L ==> 50    | XC ==> 90
C ==> 100   | CD ==> 400
D ==> 500   | CM ==> 900
M ==> 1000  |

=== KEEP IN MIND ===
1- Roman numerals are usually written largest to smallest from left to right
2- in some cases as the above ones a smaller number could come before the larger number (4, 9, 40, 90, 400, 900)

*/ 

// map the roman letters to their respective values
const map = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000]
]);

const romanToInt = function(s) {
	// create iterator
	let i = s.length - 1;

	// create a result binding and give it the smallest number in the roman expression(usually the last one to the right)
	let total = map.get(s[i]);

	// loop through the expression s starting from the end to the start
	while(i > 0) {

		// specify the current number and the one before it so we can compare them and determine whether we add or subtract
		let curr = map.get(s[i]);
		let prev = map.get(s[i-1]);

		// if our current number is less than or equall to the one before it, add the the value of that previous one to the total (because we already have the total == current number in queue)
		if(curr <= prev) {
			total += prev;
		} else if(curr > prev) { // if the current number is greater than the one before it then subtract the value of the previous one from the total
			total -= prev;
		}

		// decrease the iterator by one so we can evaluate the next number in queue
		i--;
	}

	return total;
};


console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));