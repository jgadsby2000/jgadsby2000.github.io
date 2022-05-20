function generateRipple(x, y){

    context.beginPath();
    context.arc(x, y, 93, 0, 2 * Math.PI, true);
    context.fillStyle = "#E25FC6";
    context.fill();
    //$('body').ripples("drop", x, y, 1, strength)

    

}