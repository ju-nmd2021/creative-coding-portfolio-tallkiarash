//this experiment comes from Youtube video **NEW VARIATION**. source: https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding

var points = [];
var mult;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(DEGREES); 
    noiseDetail (300);
    var density = 200;
    var space = width / density; 


    for (var x = 0; x < width; x += space){
        for(var y = 0; y < height; y += space){
            var p = createVector(x - random(0, 50),y + random(0, -1));
            points.push(p);
        }
    }

    mult = random ( 0.09, 0.01);
} 

function draw(){
    noStroke();

    for (var i = 0; i < points.length; i++){
        var r = map(points[i].x, 0, width, 105, 205);
        var g = map(points[i].y, 0, height, 100, 102);
        var b = map(points[i].x, 0, width, 150, 10);
        fill (r,g,b);
        
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 360); 

        points[i].add (createVector(sin (angle), cos(angle))); 
    
        if (dist (width /2, height /2, points[i].x, points[i].y) < 310){
            ellipse(points[i] . x, points[i].y, 1); 
        }
    }
}