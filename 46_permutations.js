/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = (nums) => {
    const result = [];
    const l = nums.length;
    const combination = new Array(l);
    
    const dfs = (k, nums) => {
        for (var i = 0 ; i < nums.length; i ++) {
            combination[k] = nums[i];
            nums_splice = nums.slice();
            nums_splice.splice(i, 1);
            k < l - 1 ? dfs(k + 1, nums_splice) : result.push([...combination]);
        }
    }
    
    dfs(0, nums);
    
    return result;
  };

nums = [1, 2, 3];
console.log(permute(nums));