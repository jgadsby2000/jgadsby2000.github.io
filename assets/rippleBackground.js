/**
 * Draws a circle at position (x,y)
 * @param {int} x 
 * @param {int} y 
 */
function generateRipple(x, y){
    context.beginPath();
    context.arc(x, y, 93, 0, 2 * Math.PI, true);
    context.fillStyle = "#E25FC6";
    context.fill();
}