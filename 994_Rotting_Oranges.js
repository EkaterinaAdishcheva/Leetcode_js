/**
 * @param {number[][]} grid
 * @return {number}
 */

 const ROTTEN_IND = 2;
 const FRESH_IND = 1;
 const JUST_SPOILED = 3;
 
 const FRESH_LASTS = -1;
 const FRESH_DOESNT_LAST = -2;
 
 var RottingLU = function(grid, i, j) {
     if (i > 0) {
         if (grid[i - 1][j] === FRESH_IND) {grid[i - 1][j] = JUST_SPOILED;}
     }
     if (j > 0) {
         if (grid[i][j - 1] === FRESH_IND) {grid[i][j - 1] = JUST_SPOILED;}
     }
 }
 
 var RottingRD = function(grid, i, j, n, m) {
     if (i < n - 1) {
         if (grid[i + 1][j] === FRESH_IND) {grid[i + 1][j] = JUST_SPOILED;}
     }
     if (j < m - 1) {
         if (grid[i][j + 1] === FRESH_IND) {grid[i][j + 1] = JUST_SPOILED;}
     }
 }
 
 var RottingStep = function(grid, n, m) {
 
     let rotten_qnt = 0;
     for (var i = 0; i < n ; i ++ ) {
         for (var j = 0 ; j < m ; j ++ ) {
             if (grid[i][j] === ROTTEN_IND) {
                 rotten_qnt++;
                 RottingRD(grid, i, j, n, m)
             }            
         }    
     }
 
     let rotten_qnt_new = 0;
     let fresh_qnt_new = 0; 
     for (var i = n - 1 ; i >= 0 ; i -- ) {
         for (var j = m - 1 ; j >= 0 ; j -- ) {
             if (grid[i][j] === ROTTEN_IND) {
                 RottingLU(grid, i, j);
             }
             if (grid[i][j] === JUST_SPOILED) {
                 grid[i][j] = ROTTEN_IND;
             }
             if (grid[i][j] === ROTTEN_IND) {
                 rotten_qnt_new ++;
             } else if (grid[i][j] === FRESH_IND) {
                 fresh_qnt_new = 1;
             }                    
         }    
     }
 
     if (rotten_qnt === rotten_qnt_new) {
         if (fresh_qnt_new === 1) {return FRESH_LASTS;}
         return FRESH_DOESNT_LAST;
     }
     return rotten_qnt_new;
 }
 
 var orangesRotting = function(grid) {
     let n = grid.length;
     let m = grid[0].length;
     var while_ind = 1; 
     let steps = 0;
     while (while_ind >= 0) {
         while_ind = RottingStep(grid, n, m, 2, 1);
         steps ++;
     }
     if (while_ind === -1) {return -1;}
     return steps - 1;
 };
 
grid = [[0,2]]
let res = orangesRotting(grid)
console.log(res);