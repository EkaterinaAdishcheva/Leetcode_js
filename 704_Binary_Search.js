/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binarySearch(a, l, r, x) {
    if ( r > l ) {
        let m = l + Math.floor( (r - l) / 2 )
        if ( x == a[m] ) {
            return m;
        }

        if ( x > a[m] ) {
            return binarySearch(a, m + 1, r, x)            
        }
        return binarySearch(a, l, m, x)
    }
    return -1;
}

var search = function(nums, target) {
    if ( nums[0] > target || nums[nums.length - 1] < target ) {
        return -1;
    }
    var res = binarySearch(nums, 0, nums.length, target) 
    return res;
};

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n, x);
(result == -1) ? document.write( "Element is not present in array")
                   : document.write("Element is present at index " +result);