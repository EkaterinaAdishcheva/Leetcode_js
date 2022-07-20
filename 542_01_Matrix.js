/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var returnCell_LU = function(mat, res_matrix, i, j, n, m) {
    if ( mat[i][j] === 0 ) {return 0;}
    let res = res_matrix[i][j];
    if (i > 0) {res = Math.min(res, res_matrix[i - 1][j] + 1)}
    if (j > 0) {res = Math.min(res, res_matrix[i][j - 1] + 1)}
    return res;
}

var returnCell_RD = function(mat, res_matrix, i, j, n, m) {
    if ( mat[i][j] === 0 ) {return 0;}
    let res = res_matrix[i][j];
    if (i < n - 1) {res = Math.min(res, res_matrix[i + 1][j] + 1)}
    if (j < m - 1) {res = Math.min(res, res_matrix[i][j + 1] + 1)}
    return res;
}


var updateMatrix = function(mat) {
    let n = mat.length;
    let m = mat[0].length;
    const res_matrix = Array(n).fill('').map(() => Array(m).fill(Infinity));

    for (var i = 0; i < n; i ++ ) {
        for (var j = 0 ; j < m ; j ++) {
            res_matrix[i][j] = returnCell_LU(mat, res_matrix, i, j, n, m)
        }
    }

    for (var i = n - 1; i >= 0; i -- ) {
        for (var j = m-1 ; j >= 0 ; j --) {
            res_matrix[i][j] = returnCell_RD(mat, res_matrix, i, j, n, m)
        }
    }

    return res_matrix
};
