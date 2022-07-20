/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 
 function colorCell(image, r, c, saved_color, color, seen){    
    if (seen[r][c]) {
        return;
    }

    seen[r][c] = true;

    if ( image[r][c] != saved_color ) {
        return;
    }
    
    image[r][c] = color;
    
    if (r > 0) {
        colorCell(image, r - 1, c, saved_color, color, seen)
    }
    if (r < image.length - 1) {
        colorCell(image, r + 1, c, saved_color, color, seen)
    }
    if (c > 0) {
        colorCell(image, r, c - 1, saved_color, color, seen)
    }
    if (c < image[0].length - 1) {
        colorCell(image, r, c  + 1, saved_color, color, seen)
    }
}
var floodFill = function(image, sr, sc, color) {
    const saved_color = image[sr][sc];
    var seen = Array(image.length)
    for (var i = 0; i < seen.length; i ++) {
        seen[i] = Array(image[0]);
        for (var j = 0; j < seen[0].length; j ++) {
            seen[i][j] = false;     
        }    
    }
    colorCell(image, sr, sc, saved_color, color, seen);
    return image;
};


image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
floodFill(image, sr, sc,colorCell)
console.log(image)