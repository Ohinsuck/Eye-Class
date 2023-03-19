var e1, e2, e3;

function setup() {
  createCanvas(640, 360);
  noStroke();
  e1 = new RectEye( 250,  16, 120);
  e2 = new RectEye( 164, 185,  80);  
  e3 = new RectEye( 420, 230, 220);
}

function draw() {
  background(102);
  
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);

  e1.display();
  e2.display();
  e3.display();
}

function RectEye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0.0;

  this.update = function(mx, my) {
    this.angle = atan2(my-this.y, mx-this.x);
  }
  
  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    rectMode(CENTER); 
    rect(0, 0, this.size, this.size); 
    rotate(this.angle);
    fill(153, 204, 0);
    rect(this.size/4, 0, this.size/2, this.size/2); 
    pop();
  }
}
  
  












