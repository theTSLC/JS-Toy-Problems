// Back to Basics: Summation
// Find the sum of every number between 1 and a number (assume all positive integers > 0)

// O(n) - linear time complexity
var summation = function (number) {
	var sum = 0;
	for (var i = 0; i <= number; i++) {
		sum += i;
	}
	return sum;
}

// O(1) - constant time complexity
var summation = function (number) {
	return number * (number + 1) / 2;
}

// ES2015 syntax
const summation = number => number * (number + 1) / 2;



// Testing Suite
describe('summation', function () {
	it('should return the correct sum', function () {
		expect(summation(1)).to.equal(1);
		expect(summation(8)).to.equal(36);
	})
})