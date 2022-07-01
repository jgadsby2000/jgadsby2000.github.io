/**
 * Draw the boids
 */
function drawBoids() {
  // draw the colored region
  context.beginPath();
  context.arc(200, 200, 93, 0, 2 * Math.PI, true);
  context.fillStyle = "#E25FC6";
  context.fill();

  // draw the stroke
  context.lineWidth = 20;
  context.strokeStyle = "#66CC01";
  context.stroke();
}
function loadBoids(){

}