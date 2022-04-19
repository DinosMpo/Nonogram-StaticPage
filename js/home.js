"use strict";
let canvas    = document.getElementById("canvas");
let ctx          = canvas.getContext("2d");
let screen    = document.getElementById("screen");
let container = document.getElementById("container");
let state     = "menu";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let introScreenLogo = {
    textLogo: [
                        [1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1],
                        [1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1],
                        [1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1],
                        [1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1]
    ],
    blockSize: 0,
    draw: function() {
       ctx.fillStyle = "black";
        this.blockSize = (canvas.width-30) / 37;
        for(let i=0; i<this.textLogo.length; i++){
            for(let y=0; y<this.textLogo[i].length; y++){
                if(this.textLogo[i][y] === 1){
                    ctx.beginPath();
                    ctx.fillRect(y*this.blockSize + 15, 
                                      i*this.blockSize + 15, 
                                      this.blockSize, this.blockSize);
                    ctx.strokeStyle = "red";
                    ctx.lineWidth   = 2;
                    ctx.strokeRect(y*this.blockSize + 15, 
                                        i*this.blockSize + 15, 
                                        this.blockSize, this.blockSize);
                }
            }
        }
    }
};

//Rectangle class
function Rect(x, y, w, h, dx, color, stroke) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.color = color;
    this.stroke = stroke;

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = "black";
         ctx.lineWidth   = 2;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

    this.update = function() {
        if(this.y + this.w > innerHeight || this.y < 0){
            this.dx = -this.dx;
        }
        this.y += this.dx;    
        this.draw();
    }

    this.relocate = function(x, y) {
        this.x = x;
        this.y = y;
    }
};

//X shape class
function xRect(x, y, w, h, dx, textSize) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.textSize = textSize;

    this.draw = function() {
        ctx.beginPath();
        ctx.font = textSize +"px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("X", this.x, this.y);
        ctx.stroke();
        ctx.fill();
    }

    this.update = function() {
        if(this.y + this.w > innerHeight || this.y < 0){
            this.dx = -this.dx;
        }
        this.y += this.dx;
        this.draw();
    }

    this.relocate = function(x, y) {
        this.x = x;
        this.y = y;
    }
};

let blackRectArray = [];
let whiteRectArray = [];
let xRectArray      = [];

//Create 30 black rects
for(let i=0; i<30; i++){
    let size = Math.floor(Math.random() * 30) + 5;
    let x = Math.random() * (innerWidth - size * 2) + size;
    let y = Math.random() * (innerHeight - size * 2) + size;
    let dx = Math.random() * 4;
    let color = "black";
    blackRectArray.push(new Rect(x, y, size, size, dx, color));
}
//Create 30 white rects
for(let i=0; i<30; i++){
    let size = Math.floor(Math.random() * 30) + 5;
    let x = Math.random() * (innerWidth - size * 2) + size;
    let y = Math.random() * (innerHeight - size * 2) + size;
    let dx = Math.random() * 4;
    let color = "white";
    whiteRectArray.push(new Rect(x, y, size, size, dx, color));
}
//Create 30 x shape rects
for(let i=0; i<30; i++){
    let size = Math.floor(Math.random() * 30) + 5;
    let x = Math.random() * (innerWidth - size * 2) + size;
    let y = Math.random() * (innerHeight - size * 2) + size;
    let dx = Math.random() * 4;
    let textSize = Math.floor(Math.random() * 30) + 10;
    xRectArray.push(new xRect(x, y, size, size, dx, textSize));
}

let img = new Image();

if(window.innerHeight >= 753) {
    if(window.innerWidth >= 999) {
        img.src = "img/nono_1000X753.png";
    }else if(window.innerWidth < 999 && window.innerWidth >= 719) {
        img.src = "img/nono_720X542.png";
    }else if(window.innerWidth < 719 && window.innerWidth >= 480) {
        img.src = "img/nono_480X361.png";
    }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
        img.src = "img/nono_360X271.png";
    }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
        img.src = "img/nono_304X229.png";
    }
}else if(window.innerHeight < 753 && window.innerHeight >= 543) {
    if(window.innerWidth >= 719) {
        img.src = "img/nono_720X542.png";
    }else if(window.innerWidth < 719 && window.innerWidth >= 480) {
        img.src = "img/nono_480X361.png";
    }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
        img.src = "img/nono_360X271.png";
    }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
        img.src = "img/nono_304X229.png";
    }
}else if(window.innerHeight < 543 && window.innerHeight >= 360) {
    if(window.innerWidth >= 480) {
        img.src = "img/nono_480X361.png";
    }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
        img.src = "img/nono_360X271.png";
    }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
        img.src = "img/nono_304X229.png";
    }
}else if(window.innerHeight < 360) {
    if(window.innerWidth >= 360) {
        img.src = "img/nono_360X271.png";
    }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
        img.src = "img/nono_304X229.png";
    }
}

function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);    
}

function animate() {
    if(state === "menu") {
        clearCanvas();
        ctx.drawImage(img, (innerWidth/2)-(img.width/2),    
                    (innerHeight/2)-(img.height/2));
        introScreenLogo.draw();
        for(var i = 0; i < blackRectArray.length; i++) {
            blackRectArray[i].update();
            whiteRectArray[i].update();
            xRectArray[i].update();
        }
    }
}

setInterval(animate, 1000/50);

//Window resize
$(window).resize( () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if(state === 'menu') {
        ctx.drawImage(img, (innerWidth/2)-(img.width/2), (innerHeight/2)-(img.height/2));
        introScreenLogo.draw();
        for(let i=0; i<30; i++) {
            blackRectArray[i].relocate(Math.random() * (innerWidth - blackRectArray[i].w * 2) + blackRectArray[i].w, Math.random() * (innerHeight - blackRectArray[i].w * 2) + blackRectArray[i].w);
            whiteRectArray[i].relocate(Math.random() * (innerWidth - whiteRectArray[i].w * 2) + whiteRectArray[i].w, Math.random() * (innerHeight - whiteRectArray[i].w * 2) + whiteRectArray[i].w);
            xRectArray[i].relocate(Math.random() * (innerWidth - xRectArray[i].w * 2) + xRectArray[i].w, Math.random() * (innerHeight - xRectArray[i].w * 2) + xRectArray[i].w);
            blackRectArray[i].update();
            whiteRectArray[i].update();
            xRectArray[i].update();
        }
    }else if(state === 'level') {
        if(window.innerHeight > 0 && window.innerWidth > 0) {
            nonogram.relocate();
            nonogram.findUserChoices();
            ctx.save();
            ctx.translate(originX,originY);
            ctx.scale(scaleFactor,scaleFactor);
            nonogram.retrieveProgress(retrieve(currentStage), retrieve('rowNumbersGrid-'+currentStage),retrieve('columnNumbersGrid-'+currentStage));
            nonogram.redrawProgress();
            ctx.restore();
            limitBottom = nonogram.height-myLimit;
            limitRight = nonogram.width-myLimit;
        }
    }else if(state === "multiplayer") {
        if(window.innerHeight > 0 && window.innerWidth > 0) {
            nonogram.relocate();
            nonogram.findUserChoices();
            ctx.save();
            ctx.translate(originX,originY);
            ctx.scale(scaleFactor,scaleFactor);
            nonogram.redrawProgress();
            nonogram.strokeTeamMateChoice();
            ctx.restore();
            limitBottom = nonogram.height-myLimit;
            limitRight = nonogram.width-myLimit;
        }
    }
    //Change the size of the image
    if(window.innerHeight >= 753) {
        if(window.innerWidth >= 999) {
            img.src = "img/nono_1000X753.png";
        }else if(window.innerWidth < 999 && window.innerWidth >= 719) {
            img.src = "img/nono_720X542.png";
        }else if(window.innerWidth < 719 && window.innerWidth >= 480) {
            img.src = "img/nono_480X361.png";
        }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
            img.src = "img/nono_360X271.png";
        }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
            img.src = "img/nono_304X229.png";
        }
    }else if(window.innerHeight < 753 && window.innerHeight >= 543) {
        if(window.innerWidth >= 719) {
            img.src = "img/nono_720X542.png";
        }else if(window.innerWidth < 719 && window.innerWidth >= 480) {
            img.src = "img/nono_480X361.png";
        }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
            img.src = "img/nono_360X271.png";
        }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
            img.src = "img/nono_304X229.png";
        }
    }else if(window.innerHeight < 543 && window.innerHeight >= 360) {
        if(window.innerWidth >= 480) {
            img.src = "img/nono_480X361.png";
        }else if(window.innerWidth < 480 && window.innerWidth >= 360) {
            img.src = "img/nono_360X271.png";
        }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
            img.src = "img/nono_304X229.png";
        }
    }else if(window.innerHeight < 360) {
        if(window.innerWidth >= 360) {
            img.src = "img/nono_360X271.png";
        }else if(window.innerWidth < 360 && window.innerWidth >= 304) {
            img.src = "img/nono_304X229.png";
        }
    }
});