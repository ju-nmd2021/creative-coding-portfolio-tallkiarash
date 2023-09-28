//new var for the perfield part. ***//this experiment comes from Youtube video. https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding

let points = [];
let mult;
let bgColor;//new

function setup() {
  createCanvas(windowWidth, windowHeight);
  //**New**
  bgColor = color(30); 
  background(bgColor);
  //
  angleMode(DEGREES);
  noiseDetail(20);
  let density = 65;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-5, 5), y + random(-5, 5)); // Adjusted y random range
      points.push(p);
    }
  }

  mult = random(0.5, 0);
}

function draw() {
  noStroke();

  for (let i = 0; i < points.length; i++) {
    //colors
    let r = map(points[i].x, 0, width, 120, 25);
    let g = map(points[i].y, 0, height, 25, 15);
    let b = map(points[i].x, 0, width, 25, 206);
    fill(r, g, b);

    let angle = map(noise(points[i].x + mult, points[i].y * mult), 0, 0.15, 10, 360);

    //**new**
    //https://p5js.org/reference/#/p5.Vector/random2D

    points[i].add(p5.Vector.random2D(angle).mult(2)); // Make a new 2D unit vector from a random angle.

    ellipse(points[i].x, points[i].y, 2);
  }

  // **new**  Fade the background for a trailing effect
  //https://p5js.org/reference/#/p5.Color/setAlpha
  
  bgColor.setAlpha(10); //transparency value of the color
  fill(bgColor);
  rect(0, 0, width, height);
}