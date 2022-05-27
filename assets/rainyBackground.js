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
    maxDrops = 200;

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
    context.strokeStyle = 'rgba(174,194,224,0.5)';
    context.lineWidth = 1;
    context.lineCap = 'round';
    for(drawcount = 0; drawcount < drops.length; drawcount++){
        var rainDrop = drops[drawcount];
        context.beginPath();
            context.moveTo(rainDrop.x, rainDrop.y);
            //alert(p.x);
            context.lineTo(rainDrop.x + rainDrop.length, rainDrop.y + rainDrop.length * rainDrop.ySpeed);
            context.stroke();
    }
}

function moveRainDrops(){
    for(counter = 0; counter < drops.length; counter++){
        var drop = drops[counter];
        console.log(drop);
        drop.y += drop.ySpeed;
        if(drop.y > canvas.height){
            drop.y = -20;
            drop.x = Math.random() * canvas.width;
            drop.length = Math.random() * 1;
        }
    }
}

function drawUmbrella(){

}
