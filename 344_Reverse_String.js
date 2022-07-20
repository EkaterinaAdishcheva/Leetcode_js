/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    var length = s.length;
    for( var i  = 0; i < Math.floor(length / 2); i ++) {
        var tmp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length -i -1] = tmp;
    }   
};