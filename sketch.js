var pynt;

function preload() { 
 //pynt = createImg("http://i.imgur.com/FOgjHHd.jpg");
 pynt = loadImage("http://i.imgur.com/FOgjHHd.jpg");
}

function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
 background(0);
 frameRate (60);

}

function draw() {
 image(pynt, window.innerWidth/2-230, window.innerHeight/2-58); 
 fill(0, 5);
 rect(0, 0, window.innerWidth, window.innerHeight);   
 drawThrobber(100);


}

function drawThrobber(num) {  
  push();
  translate(window.innerWidth/2+150, window.innerHeight/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(255, 255, 255); 
  ellipse(35, 20, 5, 5);
  pop();
}