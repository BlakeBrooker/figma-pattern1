//setup function runs once at  the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//draw function is a continuos loop, runs from the start, at 60fps
function draw() {
    background(220); //light grey background

    fill(174, 218, 252,);
    square(390, 350, 180);

    fill(34, 46, 80,); 
    square(190, 150, 180);

    fill(100, 204, 0,); 
    square(190, 350, 180);

    fill(181, 202,141 ,); 
    square(390, 150, 180);

    fill(255, 725, 624,);    
    circle(390,350, 180);

    fill(138, 255, 193,);    
    circle(390,150, 180);

    fill(93, 169, 233);    
    circle(390,550, 180);

    fill(118, 129, 142,);    
    circle(200,350, 180);

    fill(3, 94, 123,);    
    circle(580,350, 180);

}