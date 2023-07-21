// Global
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 800;
let enemyYPos = 600;
let pointXPos= 450;
let pointYPos = 350;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let pointLeft, pointRight, pointTop, pointBottom;
let player1Img;
let player2Img;
let backgroundImg;
let state1 = 'start menu';
let state2 = 'game';
let scores1 = 0;
let scores2 = 0;

function preload(){
    backgroundImg = loadImage("images/background.png");
    player1Img = loadImage("images/player 1.png");
    player2Img = loadImage("images/player 2.png");
}

function setup() {
    createCanvas(1514, 755);
    noStroke();

    rectMode(CENTER);
 }


 function draw() {
    image(backgroundImg, 0, 0, 1514, 755);

    fill(0, 255, 0);
    rect(pointXPos, pointYPos, 50, 50);

    image(player1Img, myXPos, myYPos, 50, 50);
    image(player2Img, enemyXPos, enemyYPos, 50, 50);

    // Movement for players
    if (keyIsDown(65)){
        myXPos -= 5;
    }

    if (keyIsDown(68)){
        myXPos += 5;
    }

    if (keyIsDown(87)){
        myYPos -= 5;
    }

    if (keyIsDown(83)){
        myYPos += 5;
    }

    
    if (keyIsDown(LEFT_ARROW)){
        enemyXPos -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)){
        enemyXPos += 5;
    }

    if (keyIsDown(UP_ARROW)){
        enemyYPos -= 5;
    }

    if (keyIsDown(DOWN_ARROW)){
        enemyYPos += 5;
    }
 // Restricting Players from passing the Canvas
    // Player 1


    if (myXPos <= 0 ) {
        myXPos = 0;
    }

    if (myXPos >= 1464) {
        myXPos = 1464;
    } 
    if (myYPos <= 0) {
        myYPos = 0;
    }
    if (myYPos >= 705) {
        myYPos = 705;
    } 

    // Player 2

    if (enemyXPos <= 0) {
        enemyXPos= 0;
    }

    if (enemyXPos >= 1464) {
        enemyXPos = 1464;
    } 
    if (enemyYPos <= 0) {
        enemyYPos = 0;
    }
    if (enemyYPos >= 705) {
        enemyYPos = 705;
    } 
    
    // detects collison
    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;

    pointLeft = pointXPos - 50;
    pointRight = pointXPos + 0;
    pointTop = pointYPos - 50;
    pointBottom = pointYPos + 0;

    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;



    // Detects Collisons and gives points and creates random coin
    if (myLeft > pointRight || myRight < pointLeft || myTop > pointBottom || myBottom < pointTop) {


    }
    else {
        pointXPos = random( 50, width - 50); // random x position
        pointYPos = random( 50, height - 50); // random y position
        scores1 ++;
    }


    if (enemyLeft > pointRight || enemyRight < pointLeft || enemyTop > pointBottom || enemyBottom < pointTop){

    }
    else {
        pointXPos = random( 50, width - 50); // random x position
        pointYPos = random( 50, height - 50); // random y position
        scores2 ++;
    }

    fill(random(255), random(255), random(255));
    textSize(22);
    text("Player 1 # " + scores1, 15, 25 );
    textSize(22);
    text("Player 2 # " + scores2, 15, 50);
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {


    }
 
 
    else {
        fill(random(255), random(255), random(255));
        textSize(22);
        text("Get Away From Me!", 140, 480);
    }
}