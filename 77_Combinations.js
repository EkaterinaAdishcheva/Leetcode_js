/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var buildCombination = function(numbers_rest, k) {
    let short_comb = [];
    if (k == 0) {
        return short_comb;
    }

    if (k == 1) {
        for (var i = 0 ; i < numbers_rest.length; i ++ ) {
            short_comb.push([numbers_rest[i]]);
        }
        return short_comb;
    }

    for (var i = 0 ; i < numbers_rest.length - 1; i ++ )
    {        
        comb_rest = buildCombination(numbers_rest.slice(i + 1,), k - 1 );
        for (var cr = 0 ; cr < comb_rest.length; cr ++ ) {
            let comb = [];
            comb.push(numbers_rest[i]);
            comb = comb.concat(comb_rest[cr]);
            short_comb.push(comb);
        }
    }
    return short_comb;
 }   

 var combine = function(n, k) {
     let numbers = [];
     for (var i = 0 ; i < n ; i ++ ) {
        numbers.push(i + 1);
     }
     let combinations = buildCombination(numbers, k);
     return combinations;
};

n = 4;
k = 2;
console.log(combine(n, k));