// Back to Basics: Reverse a String
// Reverse a string multiple ways

var reversing = function (string) {
	var reversed = "";
	for (var i = string.length - 1; i >= 0; i--) {
		reversed += string[i];
	}
	return reversed;
}

var 