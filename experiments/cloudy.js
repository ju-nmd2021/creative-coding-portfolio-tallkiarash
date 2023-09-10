//this is the new variation of perfiled.js file. source: https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding

var points = [];
var mult;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(DEGREES); 
    noiseDetail (25);
    var density = 20;
    var space = width / density; 


    for (var x = 0; x < width; x += space){
        for(var y = 0; y < height; y += space){
            var p = createVector(x + random(-10,0),y -random(0,1));
            points.push(p);
        }
    }

    mult = random ( 0.005, 0.001 );
} 

function draw(){
    noStroke();

    for (var i = 0; i < points.length; i++){
        var r = map(points[i].x, 0, width, 255, 255);
        var g = map(points[i].y, 0, height, 20, 255);
        var b = map(points[i].x, 0, width, 0, 255);
        fill (r,g,b);
        
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 950); 

        points[i].add (createVector(cos(angle), sin(angle))); 
    
        ellipse(points[i] . x, points[i].y, 50); 
    }
}