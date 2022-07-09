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
    return l;
}

 var searchInsert = function(nums, target) {
    if ( nums[0] > target ) {
        return 0; 
    }

    if ( nums[nums.length - 1] < target ) {
        return nums.length;
    }
    res = binarySearch(nums, 0, nums.length, target);
    return res;
};