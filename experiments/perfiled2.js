//this experiment comes from Youtube video. https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding
//In this var I ahve changed colors and also changed the desity as wll as the numbers for where should noises starts.

var points = [];
var mult;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(DEGREES); 
    noiseDetail (2);
    var density = 60;
    var space = width / density; 

    for (var x = 0; x < width; x += space){
        for(var y = 0; y < height; y += space){
            var p = createVector(x + random(-10,0),y -random(0,1));
            points.push(p);
        }
    }

    mult = random ( 0.005, 0.015);
} 

function draw(){
    noStroke();

    for (var i = 0; i < points.length; i++){
        var r = map(points[i].x, 0, width, 150, 10);
        var g = map(points[i].y, 0, height, 150, 0);
        var b = map(points[i].x, 0, width, 29, 250);
        fill (r,g,b);
        
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 0.05, 10, 360); 

        points[i].add (createVector(cos(angle), sin(angle)));
    
        ellipse(points[i] . x, points[i].y, 1); //make the number into 100 then see the cloud moving!
    }
}