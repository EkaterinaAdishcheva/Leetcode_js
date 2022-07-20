/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let minimumSum = new Array( triangle.length );
    for (var i = 0 ; i < triangle.length ; i ++ ) {
        minimumSum[i] = new Array(i + 1);
    }

    const calculateSum = (i, j) => {
        if (i === (triangle.length - 1)) {
            minimumSum[i][j] = triangle[i][j];
            return triangle[i][j];
        }

        let res_l = (minimumSum[i + 1][j] === -1) ?  calculateSum(i + 1, j) : minimumSum[i + 1][j];
        let res_r = (minimumSum[i + 1][j + 1] === -1) ?  calculateSum(i + 1, j + 1) : minimumSum[i + 1][j + 1];

        let res = Math.min(res_l, res_r) + triangle[i][j];

        minimumSum[i][j] = res;

        console.log(minimumSum);
        return res;
    }

    let res = calculateSum(0, 0);
    return res;
};

let t = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(t.length);
let res = minimumTotal(t);
console.log(res);