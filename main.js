const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

            var colorsArray = [
                "#5e9bd1",
                "#f4e78f",
                "#a4e38e",
                "#f1c39e",
                "#cbb7dd",
                "#cacaca"
            ];
            var randomNumber = Math.floor(Math.random()*colorsArray.length);
            var color = colorsArray[randomNumber]
            var lineWidth = Math.floor(Math.random()*200 + 20);
        	ctx.lineWidth = lineWidth;
        	ctx.lineCap = ctx.lineJoin = 'round';

function draw(e) {
  if (!isDrawing) return; //Stops the fn from running when not moused down
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; //This is Array Destructuring—see the section below
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousout', () => isDrawing = false);

canvas.addEventListener('mousemove', function(e) {
                      
  isDrawing = true;   
            
        }, draw);



