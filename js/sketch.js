//setup function runs once at  the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//draw function is a continuos loop, runs from the start, at 60fps
function draw() {
    background(220); //light grey background

    fill(9, 9, 12);
    square(390, 350, 180);

    fill(9, 9, 12); 
    square(190, 150, 180);

    fill(9, 9, 12); 
    square(190, 350, 180);

    fill(9, 9, 12); 
    square(390, 150, 180);

    fill(9, 9, 12);    
    circle(390,350, 180);

    fill(142, 10, 1,);    
    circle(390,150, 180);

    fill(142, 10, 1);    
    circle(390,550, 180);

    fill(142, 10, 1);    
    circle(200,350, 180);

    fill(142, 10, 1);    
    circle(580,350, 180);

}