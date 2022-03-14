
/*
	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

	source: Project Euler
*/

// added min, max parameters so the answer can be more dynamic rather than fixed to numbers between 0 and 1000
let multiSum = function(min, max) {
	let result = 0;
	for(let i = min; i < max; i++) {
		if(i % 5 == 0 || i % 3 == 0) {
			result += i;
		}
	}

	return result;
};

describe('sum of multiples of 5 and/or 3', () => {
	test('example from problem text', () => {
		expect(multiSum(0, 10)).toBe(23);
	});
});
