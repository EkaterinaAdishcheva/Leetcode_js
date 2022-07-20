/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = new Map();
    let current = 0;
    
    let max_length = 0;
    let start = -1;
    

    while(current < s.length) {
        if (letters.has(s[current])) {
            if (letters.get(s[current]) > start) {
                start = letters.get(s[current]);
            }
        }
        letters.set(s[current], current);
        if (max_length < current - start) {
            max_length = current - start;
        }
        current ++;
    }

    return max_length;
};

s = "abcabcbb"

lengthOfLongestSubstring(s)