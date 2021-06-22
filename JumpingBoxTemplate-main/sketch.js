var canvas;
var music;
var block1, block2, block3, block4, box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(100, 580, 180, 30);
    block2=createSprite(300, 580, 180, 30);
    block3=createSprite(500, 580, 180, 30);
    block4=createSprite(700, 580, 180, 30);
block1.shapeColor="red";
block2.shapeColor="yellow";
block3.shapeColor="blue";
block4.shapeColor="green";
    
box=createSprite(random(20,750),200,40,40);
box.shapeColor="white";
box.velocityX=4;
box.velocityY=9;
edges=createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edges);


    if (box.isTouching(block1)){
        box.shapeColor="red";
        box.bounceOff(block1);
        music.play();
    }
    if (box.isTouching(block3)){
        box.shapeColor="blue";
        box.bounceOff(block3);
        music.play();
    }
    if (box.isTouching(block4)){
        box.shapeColor="green";
        box.bounceOff(block4);
        music.play();
    }
    if (box.isTouching(block2)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    
    drawSprites();



    //add condition to check if box touching surface and make it box
}
