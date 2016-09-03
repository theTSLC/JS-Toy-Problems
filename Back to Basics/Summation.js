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

