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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    var pos_index = binarySearch(nums, 0, nums.length, 0);
    var neg_index = pos_index - 1; 

    const abs_nums = [];

    while ( pos_index < nums.length && neg_index >= 0 ) {
        if ( nums[pos_index] > -nums[neg_index] ) {
            abs_nums.push(nums[neg_index]);
            neg_index --;
        }
        else {
            abs_nums.push(nums[pos_index]);
            pos_index ++;
        }
    }
    for ( var i = pos_index; i < nums.length ; i ++ ) {
        abs_nums.push(nums[i]);
    }
    for ( var i = neg_index; i >= 0 ; i -- ) {
        abs_nums.push(nums[i]);
    }

    const squared_nums = [];
    for ( var i = 0; i < nums.length ; i ++ ) {
        squared_nums.push(abs_nums[i] * abs_nums[i]);
    }

    return squared_nums;

};