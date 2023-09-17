// In this website I just add how to make Sin(); and then i play around whith the numbers. Source: https://p5js.org/reference/#/p5/sin

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 250);
    inc = TWO_PI / 10.0;
}

let a = 122;
let inc;

function draw (){
    fill( 150,150,150);
    for(let i = 0; i < 600; i++){
        line(i * 3, 1, i * 10, 590 + sin(a) * 25);
        a = a + inc;
    }
    noLoop();
}