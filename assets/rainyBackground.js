class rainDrop {
    constructor(y, x, ySpeed, length){
        this.x = x;
        this.y = y;
        this.ySpeed = ySpeed;
        this.length = length;
    }
}
var drops = [];
function loadRain(){
    maxDrops = 500;

    for(count = 0; count < maxDrops; count++){
        rainDropInstance = new rainDrop(Math.random() * canvas.height, Math.random() * canvas.width, Math.random() * 10 + 10, Math.random() * 1);
        drops.push(rainDropInstance);
    }
    //console.log(rainStart);
    //console.log(canvas.style.height)
    //console.log(drops);
}


function drawRainDrops(){
    moveRainDrops();
    //checkDropCollision();
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

function drawSplash(xPos, yPos){
    yPos = yPos - 25;

}

function moveRainDrops(){
    for(counter = 0; counter < drops.length; counter++){
        var drop = drops[counter];
        //console.log(drop);
        drop.y += drop.ySpeed;
        if(drop.y > y - 50 && drop.y < y + 10 && drop.x < x + 25 && drop.x > x-25){
            console.log("RainUmbrellaCollision")
            drawSplash(x, y);
            drop.y = -20;
            drop.x = Math.random() * canvas.width;
            drop.length = Math.random() * 1;
        }
        //console.log(y)
        //console.log(drop.y)
        //console.log(x)
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
    topOfHandle = y-40;
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
    //context.fill();
    //context.fill();


    context.stroke();
    context.stroke();
    context.lineWidth = 1;
    /*context.beginPath();
    context.arc(x, y, 93, 0, 2 * Math.PI, true);
    context.fillStyle = "#E25FC6";
    context.fill();*/
}
