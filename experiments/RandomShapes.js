// in this website I just learnd how to use random color and then I changed the fill to rect and etc. Source: https://www.reddit.com/r/p5js/comments/qrxjw7/deleted_by_user/ and  https://kellylougheed.medium.com/generative-art-with-p5-js-program-your-own-art-6a6ac7e57d87


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
}

function draw (){
    for(let i=0; i<40; i++){
        noStroke();
        fill( random(0,255), random(0,255), random(0,255), random(0,255));
        rect( random(0,600), random(0,600), random(255));
        ellipse ( random(0,600), random(0,600), random(255));
    }
    noLoop();
}