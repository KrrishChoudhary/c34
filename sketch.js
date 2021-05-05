const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,400,30);
    
    block1 = new block(700,700,100,100);
    block2 = new block(700,600,100,100);
    block3 = new block(700,500,100,100);
    block4 = new block(700,400,100,100);
    block5 = new block(700,300,100,100);
    block6 = new block(700,200,100,100);

    block7 = new block(850,700,100,100);
    block8 = new block(850,600,100,100);
    block9 = new block(850,500,100,100);
    block10 = new block(850,400,100,100);
    block11= new block(850,300,100,100);
    block12 = new block(850,200,100,100);

    ball1 = new ball(100,100,50);

    slingshot1 = new SlingShot(ball1.body,{x:200,y:200});
    

}

function draw(){
        background("blue");

        ground.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();

        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();

        ball1.display();

        slingshot1.display();

    Engine.update(engine);
    //strokeWeight(4);
      
}

function mouseDragged(){

Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}




