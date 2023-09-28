// in this website I just learnd how to use random color and then I changed the fill to rect and etc. Source: https://www.reddit.com/r/p5js/comments/qrxjw7/deleted_by_user/ and  https://kellylougheed.medium.com/generative-art-with-p5-js-program-your-own-art-6a6ac7e57d87


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(200);
  }
  
  function draw() {
    for (let i = 0; i < 104; i++) {
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));

      let centerX = width / 2;
      let centerY = height / 2;
  
      rect(centerX + random(-300, 300), centerY + random(-300, 300), random(255));
      ellipse(centerX + random(-300, 300), centerY + random(-300, 300), random(255));
    }
    noLoop();
}