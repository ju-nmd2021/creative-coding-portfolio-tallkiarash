//this experiment comes from Youtube video **NEW VARIATION**. source: https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding


var points = [];
var mult;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(DEGREES); 
    noiseDetail (25);
    var density = 100;
    var space = width / density; 


    for (var x = 0; x < width; x += space){
        for(var y = 0; y < height; y += space){
            var p = createVector(x + random(0, 50),y * random(0, -1));
            points.push(p);
        }
    }

    mult = random ( 0.05, 0.01);
} 

function draw(){
    noStroke();

    for (var i = 0; i < points.length; i++){
        var r = map(points[i].x, 0, width, 25, 255);
        var g = map(points[i].y, 0, height, 200, 26);
        var b = map(points[i].x, 0, width, 20, 255);
        fill (r,g,b);
        
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 650); 

        points[i].add (createVector(sin (angle), cos(angle))); 
    
            ellipse(points[i] . x, points[i].y, 0.5); 
    }
}