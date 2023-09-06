// in this website I just learnd how to use random color and then I changed the fill to rect and etc. Source: https://www.reddit.com/r/p5js/comments/qrxjw7/deleted_by_user/


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 250);
}

function draw (){
    for(let i=0; i<60; i++){
        noStroke();
        fill( random(0,255), random(0,255), random(0,255), random(0,255));
        rect( random(0,600), random(0,600), random(255));
        ellipse ( random(0,600), random(0,600), random(255));
    }
    noLoop();
}