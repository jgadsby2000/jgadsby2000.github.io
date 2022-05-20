function loadRain(){
    if (rainController){
        var init = [];
        maxParts = 2000;

        context.strokeStyle = 'rgba(174,194,224,0.5)';
        context.lineWidth = 1;
        context.lineCap = 'round';

        for(var a = 0; a < maxParts; a++) {
            init.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            l: Math.random() * 1,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 10
            })
        }
        
        
        var particles = [];
        for(var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }
        
        function draw() {
            context.clearRect(0, 0, w, h);
            for(var c = 0; c < particles.length; c++) {
            var p = particles[c];
                context.beginPath();
                context.moveTo(p.x, p.y);
                //alert(p.x);
                context.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                context.stroke();
            }
            //alert(rainController);
            move();
        }
        
        function move() {
            for(var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }

        if (rainController = true){
            setInterval(draw, 30);
        }
    }
}