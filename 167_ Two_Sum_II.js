/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    var target_dict = {};
    
    for (var i = 0 ; i < numbers.length; i ++ )
    {
        if (numbers[i] in target_dict) {
            return [target_dict[numbers[i]] + 1, i + 1]
        }
        target_dict[target - numbers[i]] = i;
    }
};