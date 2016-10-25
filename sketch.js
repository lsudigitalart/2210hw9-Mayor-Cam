// Cameron Moore

var canvasWidth = 1500;
var canvasHeight = 500;
var midX = canvasWidth/2;       // midpoint X
var midY = canvasHeight/2;      // midpoint Y

// Color Variables
var red, green, blue;

function setup()
{
  createCanvas(canvasWidth, canvasHeight);
  // Example object creation
  Racer1 = new Racer(0, canvasHeight/8, 5, 0.5, 255, 174, 201);
  Racer2 = new Racer(0, canvasHeight*3/8, 20, 0, 14, 143, 56);   // User controlled racer
  Racer3 = new Racer(0, canvasHeight*5/8, 10, 0.5, 190, 0, 0);
  Racer4 = new Racer(0, canvasHeight*7/8, 8, 0.5, 26, 30, 204);

  background(75,75,75);
  for (var i = 1; i < 4; i++)
  {
      stroke(255,255,255)
      line(0,canvasHeight * i/4, canvasWidth, canvasHeight * i/4);
  }
}

function draw()
{
  background(75,75,75);
  for (var i = 1; i < 4; i++)
  {
      stroke(255,255,255)
      strokeWeight(5);
      line(0,canvasHeight * i/4, canvasWidth, canvasHeight * i/4);
  }

  Racer1.move();
  Racer1.display();

  Racer2.interact();
  Racer2.move();
  Racer2.display();

  Racer3.move();
  Racer3.display();

  Racer4.move();
  Racer4.display();

}

// Example Constructor
function Racer(x,y,maxSpeed, accel, r,g,b)
{
  this.x = x;
  this.y = y;
  this.maxSpeed = maxSpeed;
  this.accel = accel;
  var speed = 0;


  this.move = function()
  {
    if (speed < maxSpeed)
    { speed += accel;}
    else
    { speed = maxSpeed;}
    x += speed;
  }

  this.display = function()
  {
    stroke(0,0,0);
    fill(r,g,b);
    rectMode(CENTER);
    rect(x,y,125,75);
    rectMode(CORNER);
    rect(x + 62, y - 10, 40 ,50);

    fill(10,10,10);
    ellipse(x - 42, y+37, 30);
    ellipse(x + 77, y+37, 30);

    fill(150,150,150);
    ellipse(x - 42, y+37, 15);
    ellipse(x + 77, y+37, 15);
  }

  this.interact = function()
  {
      if (keyIsPressed === true)
      {
        accel += 1;
        this.accel = accel;
      }
  }
}
