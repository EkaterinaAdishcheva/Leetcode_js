/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var letters = new Set();
    var start = 0;
    var end = 0;
    
    var max_length = 0;

    while(end < s.length && start < s.length) {
        if( letters.has(s[end]) ) {
            letters.delete(s[start]);    
            start ++;
        } else {
            letters.add(s[end]);
            if (max_length < end - start + 1) {
                max_length = end - start + 1;
            }
            end ++;
        }
    }

    console.log(max_length);
    return max_length;
};

s = "pwwkew"

lengthOfLongestSubstring(s)