/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    let n = triangle.length;
    let minimumSum = new Array( n );
    for (var i = 0 ; i < triangle.length ; i ++ ) {
        minimumSum[i] = new Array(i + 1);
    }

    const calculateSum = (i, j) => {
        if (i === (triangle.length - 1)) {
            minimumSum[i][j] = triangle[i][j];
            return triangle[i][j];
        }

        let res_l = (typeof minimumSum[i + 1][j] === 'undefined') ?  calculateSum(i + 1, j) : minimumSum[i + 1][j];
        let res_r = (typeof minimumSum[i + 1][j + 1] === 'undefined') ?  calculateSum(i + 1, j + 1) : minimumSum[i + 1][j + 1];

        let res = Math.min(res_l, res_r) + triangle[i][j];

        minimumSum[i][j] = res;

        return res;
    }

    let res = calculateSum(0, 0);
    return res;
};
