// Longest Palindrome

// Implement a function that finds the longest palindrome in a given string. 

function longestPalindrome (string) {
  if (string.length === 1) return string;
  var largestPal = "";

  for(var i=0; i<string.length; i++) {
    var offset = 1;

    // Handle even increments
    while(string.charAt(i-offset) && string.charAt(i+offset-1) &&
          string.charAt(i-offset) === string.charAt(i+offset-1)){
      comparePals(string.slice(i-offset, i+offset));
      offset++;
    }

    // Handle odd increments
    while(string.charAt(i-offset) && string.charAt(i+offset) &&
          string.charAt(i-offset) === string.charAt(i+offset)){
      comparePals(string.slice(i-offset, i+offset+1));
      offset++;
    }
  }

  return largestPal.length ? largestPal : 'No Pals for you!';

  // Helper function; hoisting makes function available to code above
  function comparePals (newPal){
    if(newPal.length >= largestPal.length)
      largestPal = newPal;
  }
}