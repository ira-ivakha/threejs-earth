let canvas = document.createElement('canvas');
canvas.setAttribute('id', 'newCanvas');
canvas.style.height = window.innerHeight;
canvas.style.width = window.innerWidth;
document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

ctx.fillStyle = 'orange';
ctx.fillStyle = '#FFA500';
ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillStyle = 'rgba(255, 165, 0, 1)';


draw();

function draw() {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 36; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 15.9 * i) + ', ' +
                Math.floor(255 - 7.08 * j) + ', 0)';
            ctx.fillRect(j * 10, i * 10, 10, 10);
        }
    }
}