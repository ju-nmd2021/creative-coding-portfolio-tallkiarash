//This experiment comes from Youtube video which is for the art itself. https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding
//For the music part I have used this source. https://www.google.com/search?sca_esv=566108044&sxsrf=AM9HkKnkplnp2FMd6jnWi_kbRz1ZjnVH2w:1694975684805&q=how+to+use+instrument+in+Tonejs&tbm=vid&source=lnms&sa=X&ved=2ahUKEwjNx-G8pLKBAxXfRPEDHU6sAX0Q0pQJegQIDBAB&biw=1707&bih=795&dpr=1.13#fpstate=ive&vld=cid:41bd7b3a,vid:7ZhbKclhDf4,st:0
//music Lab.

var points = [];
var mult;
let synth;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(DEGREES); 
    noiseDetail (25);
    var density = 50;
    var space = width / density; 

    for (var x = 0; x < width; x += space){
        for(var y = 0; y < height; y += space){
            var p = createVector(x + random(5,0),y -random(10,1));
            points.push(p);
        }
    }

    mult = random ( 0.05, 0.01);

    //Music
    synth = new Tone.AMSynth().toDestination();
} 

function Perlin(){
    noStroke();

    for (var i = 0; i < points.length; i++){
        var r = map(points[i].x, 0, width, 150, 65);
        var g = map(points[i].y, 0, height, 250, 5);
        var b = map(points[i].x, 0, width, 255, 35);
        fill (r,g,b);
        
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 150); 

        points[i].add (createVector(sin(angle), cos(angle))); 
    
        ellipse(points[i] . x, points[i].y, 1);
    }
}

function draw() {
  Perlin();
}

//music
function mouseClicked() {
  // Generate random sound parameters
  const randomNote = random(["C4", "D4", "E4", "F3", "G4", "A4", "B4"]);
  const randomDuration = random(0.5, 1);

  // Trigger the random sound
  synth.triggerAttackRelease(randomNote, randomDuration); 
}