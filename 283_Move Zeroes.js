/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    var start_zeros = -1;

    for (var i = 0; i < nums.length; i ++)
    {
        if ( nums[i] == 0 && start_zeros == -1 ) {
            start_zeros = i;
        }
        if ( nums[i] != 0 && start_zeros != -1 ) {
            [nums[start_zeros], nums[i]] = [nums[i], nums[start_zeros]];
            start_zeros ++ ;
        }
    }

    return nums;
};