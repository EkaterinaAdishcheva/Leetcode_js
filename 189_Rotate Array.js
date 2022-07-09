/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k = k % nums.length;
    const temp = []
    for ( var i = 0 ; i < k ; i ++  ) {
        temp.push( nums[nums.length - k + i]);
    }

    for ( var i = nums.length - 1 ; i >= 0 ; i --  ) {
        nums[i] = ( i < k ) ? temp[i] : nums[ i - k ];
    }
};