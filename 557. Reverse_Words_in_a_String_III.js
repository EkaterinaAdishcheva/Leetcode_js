/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    var length = s.length;
    const s_array = s.split(""); 
    for( var i  = 0; i < Math.floor(length / 2); i ++) {
        [s_array[i], s_array[length - i - 1]] = [s_array[length - i - 1], s_array[i]]; 
    }
    return s_array.join("");  
};

  
  /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    const s_array = s.split(" ");
    s_array.forEach(function(item, index, arr) {
        arr[index] = reverseString(arr[index]);
      });
    
    s = s_array.join(" ");
    console.log(s);
    return s;  
};

s = "tree two five stop"
reverseWords(s);