"use strict";

let canvas = document.getElementById("miCanvas");
let ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));
let imageData = ctx.createImageData(canvas.width,canvas.height);

let r = 0;
let g = 0;
let b = 0;


function drawRect(imageData, r, g, b){
    
    let coeficiente = 255/canvas.width ;
    
    for(let x = 0; x < canvas.width; x++) {
        r = coeficiente*x;           
        g = coeficiente*x;
        b = coeficiente*x;
        console.log(r, g, b);    
        for(let y = 0; y < canvas.height; y++){
            
            setPixel(imageData, x, y, r, g, b);    
        }        
    }

}

function setPixel(imageData, x, y, r, g, b){
    
    let index = (x + y * imageData.width) * 3;
    
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;   
}

drawRect(imageData, r, g, b);
ctx.putImageData(imageData, 0, 0);