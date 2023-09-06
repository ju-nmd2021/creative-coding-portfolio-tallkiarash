//just playing around and suddenly I designed this which I found it cool.

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 250);
}

function draw1(){
    let x = width / 33; 
    let startY = -22; 
    let endY = 12; 
    let spacing = 2; 
    for(let i=0; i<12; i++){
        for (let i = 0; i < 100; i++) {
            rotate(44);
            fill( random(0,255), random(0,255), random(0,255));
            rect(x, startY, x, endY);
            x -= spacing;
        }
    }
    noLoop();
}

function draw(){
    draw1();
    draw1();
}