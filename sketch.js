const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground1;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,575);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,500,70,70);
    box2 = new Box(800,500,70,70);
    box3 = new Box(1000,400,70,70);
    box4 = new Box(800,400,70,70);
    box5 = new Box(900,290,70,70);

    ground1 = new Ground(600,530,1300,10);

    pig1 = new Pig(900,500);
    pig2 = new Pig(900,400);

    log1 = new Log(900,420,275,PI/2);
    log2 = new Log(900,310,275,PI/2);
    log3 = new Log(850,100,136,PI/7);
    log4 = new Log(950,100,136,-PI/7);

    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
   
}