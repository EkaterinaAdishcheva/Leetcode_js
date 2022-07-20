/**
 * @param {string} s
 * @return {string[]}
 */
const combine = (n, k) => {
    const result = []; 
    const combination = new Array(k);

    if (k === 0 ) {return [[]];}

    const dfs = (k, i = 0) => {
        while (i < n) {
            combination[combination.length - k] = i++;
            k > 1 ? dfs(k - 1, i) : result.push([...combination]); 
        }
    }

    dfs(k);
    return result;
} 

const lowerLetter = (s, comb, letters) => {
    if ( comb.length === 0 ) {
        return s;
    }

    var res_str = s.substring(0, letters[comb[0]])
    for( var r = 0 ; r < comb.length - 1; r ++) {
        res_str += s.charAt(letters[comb[r]]).toLowerCase();
        res_str += s.substring(letters[comb[r]] + 1, letters[comb[r + 1]]);
    }
    res_str += s.charAt(letters[comb[comb.length - 1]]).toLowerCase();
    res_str += s.substring(letters[comb[comb.length - 1]] + 1, s.length);

    return res_str;
}

var letterCasePermutation = function(s) {
    s = s.toUpperCase();

    const letters = [];
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) < '0' || s.charAt(i) > '9') {
            letters.push(i);
        }  
    }

    n = letters.length;
    const res_combination = [];
    
    for (var k = 0 ; k <= n ; k ++ ){
        const comb_k = combine(n, k)
        comb_k.forEach(c => res_combination.push(c));
    }

    result = [];
    res_combination.forEach(c => result.push(lowerLetter(s, c, letters)));

    return result;
};

n = 3;
k = 2;

console.log(letterCasePermutation("a5a5s"));