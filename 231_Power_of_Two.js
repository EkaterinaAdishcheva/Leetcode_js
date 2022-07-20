/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let power_two = 1;
    while (power_two < n) {
        power_two *= 2;
    }
    if (power_two === n) {return true;}
    return false;
};