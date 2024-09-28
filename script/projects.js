// javascript your world :O */
const canvasBoard = document.getElementById("canvas1");
let ctx = canvasBoard.getContext("2d");
//blueberry pi 
let X = 0
let Y = 0
let DX = 20;
let DY = 20;
let RADIUS = 20;

let drawBall = () => {
  if(document.getElementById("playAnimation").checked){
        ctx.reset()
        ctx.beginPath();
        ctx.arc(X,Y,RADIUS,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        if(X < 0 || X > canvasBoard.width){
            DX = -DX;
        }
        if(Y < 0 || Y > canvasBoard.height){
            DY = -DY;
        }
        X += DX;
        Y += DY;
  }
  requestAnimationFrame(drawBall);
};


drawBall();
