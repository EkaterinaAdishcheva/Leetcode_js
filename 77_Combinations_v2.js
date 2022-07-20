/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 const combine = (n, k) => {
    const result = [];
    const combination = new Array(k);
    
    const dfs = (k, i = 1) => {
      while (i <= n) {
        combination[combination.length - k] = i++;
        k > 1 ? dfs(k - 1, i) : result.push([...combination]);
      }
    }
    
    dfs(k);
    
    return result;
  };

n = 4;
k = 2;
console.log(combine(n, k));