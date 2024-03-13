let j;


function preload(){
   
}
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);


    x1= 3
    x2= 4
    x3= 5
    y1= 3
    y2= 1
    y3= 5


    x = -499;
    y = -499;
    j = 0


    rectWidth = 400;
    rectHeight = 400;


    N = 100
    L = 25;
    P = N - L;




   }
   function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }






function draw() {
// put drawing code here
    background(250)
   
    stroke(200)
    strokeWeight(2);
    line(windowWidth/2, 0, windowWidth/2, windowHeight)


    var y = 200 + 30 * Math.sin(PI/30*j)
    j+=1
    fill("orange")
    ellipse (x + 850, y+100, rectHeight-55, rectWidth-35);


    fill("white")
    ellipse (x + 920, y + 50, rectHeight-350, rectWidth-350);
    fill("black")
    ellipse (x + 930, y + 50, rectHeight-370, rectWidth-370);


    fill("black")
    ellipse (x + 780, y + 50, rectHeight-350, rectWidth-350);


    fill("white")
    ellipse (x + 780, y + 50, rectHeight-350, rectWidth-350);
    fill("black")
    ellipse (x + 790, y + 50, rectHeight-370, rectWidth-370);




    fill("black")
    stroke(0);
    arc(x + 850, y+160, rectWidth-250, rectWidth-250, 0, 8*PI *P/N);


    fill("red")
    stroke(0);
    ellipse (x + 850, y + 210, rectHeight-310, rectWidth-360);


    fill("black")
    rect (x + 650, y + 15, rectHeight-240, rectWidth-430);


    fill("black")
    rect (x + 895, y + 15, rectHeight-240, rectWidth-430);


    fill("pink")
    ellipse (x + 740, y + 100, rectHeight-350, rectWidth-350);
   
    fill("pink")
    ellipse (x + 975, y + 100, rectHeight-350, rectWidth-350);
}

