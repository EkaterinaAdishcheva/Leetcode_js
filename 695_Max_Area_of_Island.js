/**
 * @param {number[][]} grid
 * @return {number}
 */

var recursion = function(image, r, c, savedColor, newColor, counted, area) {
    if (counted[r][c]) { return; }
    counted[r][c] = true;
    if (image[r][c] != savedColor) {return;}
    image[r][c] = newColor;
    area[0] ++;
    if (r > 0 && image[r - 1][c] === savedColor ) { 
        recursion(image, r - 1, c, savedColor, newColor, counted, area);
    }
    if (r < image.length -1 && image[r + 1][c] === savedColor) { 
        recursion(image, r + 1, c, savedColor, newColor, counted, area);
    }
    if (c > 0 && image[r][c - 1] === savedColor) { 
        recursion(image, r, c - 1, savedColor, newColor, counted, area);
    }
    if (c < image[0].length -1 && image[r][c + 1] === savedColor) {
        recursion(image, r, c + 1, savedColor, newColor, counted, area);
    }
};

var floodFill = function(image, sr, sc, newColor) {
    let saved_color = image[sr][sc];
    if ( saved_color === newColor ) return image;

    let counted = new Array(image.length);
    for (var i = 0 ; i < counted.length; i ++) {
        counted[i] = new Array(image[0].length);
        for (var j = 0 ; j < counted[0].length; j ++) {
            counted[i][j] = false;
        }
    }
    
    let area = new Array(1);
    area[0] = 0;

    recursion(image, sr, sc, saved_color, newColor, counted, area);
    return area[0];
}

var maxAreaOfIsland = function(grid) {
  let max_area = 0;

  
  for (var i = 0 ; i < grid.length; i ++ ) {
    for (var j = 0 ; j < grid[0].length; j ++ ) {
        if (grid[i][j] === 1) {
            let area = floodFill(grid, i, j, 2);
            max_area = area > max_area ? area : max_area;
        }
    }    
  }

  return max_area;  
};


// grid = [
//     [0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]]

// grid = [[0,0,0,0,0,0,0,0]]

grid = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]]

// grid = [[0,0], [1,1]];
let res = maxAreaOfIsland(grid);
console.log(res);