// Just palying around whith what I have learned trough the RandomShape.js file.
//Source: https://www.reddit.com/r/p5js/comments/qrxjw7/deleted_by_user/ 

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 250);
}

function draw(){
    let x = width / 100; 
    let startY = -10; //change this to three number like 123! 
    let spacing = 1; 
    for(let i=0; i<12; i++){
        for (let i = 0; i < 150; i++) {
            rotate(4);
            translate(50,5);
            fill( random(0,255), random(0,255), random(0,255));
            rect(x, startY, x);
            x -= spacing; //make this +
        }
    }
    noLoop();
}