// Global
// Player starting positions and functions
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 800;
let enemyYPos = 600;
let pointXPos= 450;
let pointYPos = 350;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let pointLeft, pointRight, pointTop, pointBottom;
// Images Function
let turtleImg;
let player1Img;
let player2Img;
let backgroundImg;
let startImg
let startGmScr;
let winScr;
let states = 'menu'
let scores1 = 0;
let scores2 = 0;

function preload(){
    backgroundImg = loadImage("images/background.png");
    player1Img = loadImage("images/player1.png");
    player2Img = loadImage("images/player2.png");
    startImg = loadImage("images/StartGame.jpg");
    startGmScr = loadImage("images/startgamescreen.jpg");
    turtleImg = loadImage("images/turtle2.png");
    winScr = loadImage("images/winscreen.png");
}

function setup() {
    createCanvas(1514, 755);
    noStroke();

    rectMode(CENTER);
    
 }


 function draw() {
    //Menu Background
    image(startGmScr, 0, 0, 1514, 755);

    // Beginning Screen and Menu Feel free to add images
    // to make it look nicer than just having text
    textSize(22);
    fill(random(255), random(255), random(255));
    text("Player #1", 200, 280);
    text("Controls: WASD", 180, 420);
    image(player1Img, 200, 300, 100, 100);
    text("Player #2", 1200, 220);
    text("Controls: Arrow Keys", 1150, 350);
    image(player2Img, 1200, 230, 100, 100);
    // Start game state
    image(startImg, 650, 450, 300, 100)
    
    
    if( states == "Begin"){
    image(backgroundImg, 0, 0, 1514, 755);

    image(turtleImg, pointXPos, pointYPos, 50, 50);

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

    pointLeft = pointXPos - 25;
    pointRight = pointXPos + 25;
    pointTop = pointYPos - 25;
    pointBottom = pointYPos + 25;

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
    text("Player #1: " + scores1, 15, 25 );
    textSize(22);
    text("Player #2: " + scores2, 15, 50);
    text("Score 25 Points to Win", 15, 75);
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {


    }
 
 
    else {
        fill(random(255), random(255), random(255));
        textSize(22);
        text("Get Away From Me!", 140, 480);
    }
 }
    if ( scores1 == 25){
        image(winScr, 0, 0, 1514, 755);
        fill(random(255), random(255), random(255));
        textSize(35);
        text("Player #1 Wins!", 757, 377.5, 300, 100);
        image(player1Img, 630, 400, 200, 200);
    }
    else if ( scores2 == 25){
        image(winScr, 0, 0, 1514, 755);
        fill(random(255), random(255), random(255));
        textSize(35);
        text("Player #2 Wins!", 757, 377.5, 300, 100);
        image(player2Img, 630, 400, 200, 200);
    }
}

function mouseClicked(){
    if(mouseX >= 650 && mouseX <= 950 && mouseY >= 450 && mouseY <= 550 ){
        states = 'Begin'

    }
}