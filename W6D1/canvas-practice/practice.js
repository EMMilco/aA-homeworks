document.addEventListener("DOMContentLoaded", function(){

});

const canvas = document.getElementById("myCanvas");
canvas.setAttribute("height", "500");
canvas.setAttribute("width", "500");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(25,38,90)';
ctx.fillRect(100,100,100,100);

ctx.beginPath();
ctx.arc(400, 250, 50, 0, 4);
ctx.strokeStyle = 'rgb(90,38,25)';
ctx.lineWidth = 3;
ctx.stroke();
