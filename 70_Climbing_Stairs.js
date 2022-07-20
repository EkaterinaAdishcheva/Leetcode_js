/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = (n) => {
    let ways_qnt = new Array(n + 1);

    const ways = (m) => {
        if ( m === 2 || m === 1 ) {
            ways_qnt[m] = m;
            return m;
        }
        let res1 = (typeof ways_qnt[m - 1] === 'undefined') ?  ways(m - 1) : ways_qnt[m - 1];
        let res2 = (typeof ways_qnt[m - 2] === 'undefined') ?  ways(m - 2) : ways_qnt[m - 2];

        let res = res1 + res2;
        ways_qnt[m] = res;
        return res;
    }

    let res = ways(n);

    return res;
};
