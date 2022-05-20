
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}

function getCursorXPosition(canvas, event){
    const rect = canvas.getBoundingClientRect()
    x = event.clientX - rect.left
    return x;
}
function getCursorYPosition(canvas, event){
    const rect = canvas.getBoundingClientRect()
    y = event.clientY - rect.top
    return y
}

let rainController = false;

let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

// get current size of the canvas
let rect = canvas.getBoundingClientRect();

// increase the actual size of our canvas
canvas.width = rect.width * devicePixelRatio;
canvas.height = rect.height * devicePixelRatio;

// ensure all drawing operations are scaled
context.scale(devicePixelRatio, devicePixelRatio);

// scale everything down using CSS
canvas.style.width = rect.width + 'px';
canvas.style.height = rect.height + 'px';

w = canvas.style.width;
h = canvas.style.height;



function changebgStyle(style){


    function clearScreen(){
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height); 
        rainStart = false;
        deleteRainDrops();
          
    
    }

    switch (style) {
        case "Boids":
            clearScreen();
            loadBoids();
            //alert("Boid-Gang");
            break;
        case "Ripple":
            clearScreen();
            //loadRipple();
            //alert("Ripping");
            break;
        case "Rainy":
            clearScreen();
            rainController = true;
            var something = (function() {
                var executed = false;
                return function() {
                    if (!executed) {
                        executed = true;
                        loadRain();
                    }
                };
            })();
            something();

            
            //alert("Rainy");
            break;
            
    
        default:
            break;
    }
    currentBGStyle = style;
}