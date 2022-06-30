var umbrellaHeight = 40;
var umbrellaRadius = 20;
var drops = [];
var splashX;
var splashY;


/**
 * 
 */
class rainDrop {
    constructor(y, x, ySpeed, length){
        this.x = x;
        this.y = y;
        this.ySpeed = ySpeed;
        this.length = length;
    }
}

function loadRain(){
    maxDrops = 300;
    for(count = 0; count < maxDrops; count++){
        rainDropInstance = new rainDrop(Math.random() * canvas.height, Math.random() * canvas.width, Math.random() * 10 + 10, Math.random() * 1);
        drops.push(rainDropInstance);
    }
}


function drawRainDrops(){
    moveRainDrops();
    dropContext.strokeStyle = 'rgba(174,194,224,0.5)';
    dropContext.lineCap = 'round';
    for(drawcount = 0; drawcount < drops.length; drawcount++){
        var rainDrop = drops[drawcount];
        context.lineWidth = 1;
        dropContext.beginPath();
        dropContext.moveTo(rainDrop.x, rainDrop.y);
        //alert(p.x);
        dropContext.lineTo(rainDrop.x + rainDrop.length, rainDrop.y + rainDrop.length * rainDrop.ySpeed);
        context.lineWidth = 2;
        dropContext.stroke();
    }
}


/**
 * Returns the X and Y coordinates for splash location
 * @param {*} xPosDrop - x position of Raindrop
 * @param {*} xUmb - x position of Umbrella
 * @returns {array}
 */
function getSplashLoc(xPosDrop, xUmb){
    radius = umbrellaRadius;
    distance = xUmb - xPosDrop;
    //console.log("Distance: " + distance);
    //console.log("Radius: " + radius);
    h = Math.sqrt(Math.pow(radius, 2) - Math.pow(distance, 2));
    xSplash = x - distance;
    ySplash = y - umbrellaHeight - h;
    return [xSplash, ySplash];
}

/**
 * Draws the splash of a raindrop on the umbrella
 * @param {array} splashXY - Array containing X and Y coordinate of splash 
 */
function drawSplash(splashXY){
    splashX = splashXY[0];
    splashY = splashXY[1];
    if(Number.isNaN(splashY)){

    }else{
        console.log(splashX + " " + splashY)
        splashContext.strokeStyle = 'rgba(174,194,224,0.5)';
        splashContext.lineCap = 'round';
        splashContext.moveTo(xSplash, ySplash);
        splashContext.lineTo(xSplash+3,ySplash -4);
        splashContext.lineWidth = 2;
        dropContext.stroke();    
        splashContext.moveTo(xSplash, ySplash);
        splashContext.lineTo(xSplash-3,ySplash -4);
        splashContext.lineWidth = 2;
        dropContext.stroke();  
    }

}

function moveRainDrops(){
    for(counter = 0; counter < drops.length; counter++){
        var drop = drops[counter];
        //console.log(drop);
        drop.y += drop.ySpeed;
        if(drop.y > y - 50 && drop.y < y + 10 && drop.x < x + 25 && drop.x > x-25){
            console.log("RainUmbrellaCollision")
            splashXY = getSplashLoc(drop.x, x, y);
            drawSplash(splashXY);
            drop.y = -20;
            drop.x = Math.random() * canvas.width;
            drop.length = Math.random() * 1;
        }
        if(drop.y > canvas.height){
            drop.y = -20;
            drop.x = Math.random() * canvas.width;
            drop.length = Math.random() * 1;
        }
    
    }
}

function drawUmbrella(){
    //Umbrella Stroke setting
    context.strokeStyle = 'rgb(135,151,177)';
    context.lineWidth = 5;
    context.lineCap = 'round';
    topOfHandle = y-umbrellaHeight;
    bottomOfHandle = y-6
    //Umbrella stem
    context.beginPath();
    context.moveTo(x,bottomOfHandle)
    context.lineTo(x, topOfHandle);
    //Umbrella Handle
    context.arc(x-4,bottomOfHandle, 4, 0, Math.PI + (Math.PI * 0) / 2, false)
    context.moveTo(x,topOfHandle)
    context.closePath()
    context.stroke();
    context.stroke();
    context.beginPath()
    context.moveTo(x,topOfHandle)
    context.lineTo(x+6,topOfHandle)
    context.arc(x,topOfHandle, 20, 0, Math.PI + (Math.PI * 0) / 2, true)
    context.lineTo(x,topOfHandle)
    context.fillStyle = 'rgb(135,151,177)';
    context.fill();
    context.fillStyle = 'white';
    context.stroke();
    context.stroke();
    context.lineWidth = 1;
}
