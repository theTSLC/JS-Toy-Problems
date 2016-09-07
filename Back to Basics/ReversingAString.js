// Back to Basics: Reverse a String
// Reverse a string multiple ways

// O(n) - linear time complexity
// Decrementing For Loop
var reversing = function (string) {
  var reversed = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

// Using built in methods
var reversing = function (string) {
  var split = string.split("");
  var reversed = split.reverse();
  var joined = reversed.join("");
  return joined;
}
// Curried
var reversing = function (string) {
  string.split("").reverse().join("");
}

// Double loops
var reversing = function (string) {
  var array = [];
  for (var i = string.length - 1; x = 0; i >=0; i--; x++) {
    array[x] = string[i];
  }
  return array.join("");
}
