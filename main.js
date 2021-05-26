var canvas = new fabric.Canvas('myCanvas');
blockImageWidth = 30;
blockImageHeight = 30
playerX = 10
playerY = 10
var playerObject = ""
var blockImageObject = ""

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Image) {
        playerObject = Image;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Image) {
        blockImageObject = Image;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if (e.shiftKey == true && keypressed == '77') {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '73') {
        newImage("ironman_body.png");
    }
    if (keypressed == '73', '70') {
        newImage("ironman_face.png");
    }
    if (keypressed == '73', '82') {
        newImage("ironman_right_hand.png");
    }
    if (keypressed == '73') {
        newImage("ironman_left_hand.png");
    }
    if (keypressed == '73', '71') {
        newImage("ironman_legs.png");
    }
    if (keypressed == '83', '63') {
        newImage("spiderman_body.png");
    }
    if (keypressed == '83', '70') {
        newImage("spiderman_face.png");
    }
    if (keypressed == '83', '76') {
        newImage("spiderman_left_hand.png");
    }
    if (keypressed == '83', '82') {
        newImage("spiderman_right_hand.png");
    }
    if (keypressed == '83', '71') {
        newImage("spiderman_legs.png");
    }
    if (keypressed == '84', '63') {
        newImage("thor_body.png");
    }
    if (keypressed == '84', '70') {
        newImage("thor_face.png");
    }
    if (keypressed == '84', '76') {
        newImage("thor_left_hand.png");
    }
    if (keypressed == '84', '82') {
        newImage("thor_right_hand.png");
    }
    if (keypressed == '84', '71') {
        newImage("thor_legs.png");
    }
    if (keypressed == '72', '63') {
        newImage("hulk_body.png");
    }
    if (keypressed == '72', '70') {
        newImage("hulk_face.png");
    }
    if (keypressed == '72', '82') {
        newImage("hulk_right_hand.png");
    }
    if (keypressed == '72', '76') {
        newImage("hulk_left_hand.png");
    }
    if (keypressed == '72', '71') {
        newImage("hulk_legs.png");
    }
}

function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        console.log("blockImageHeight=" + blockImageHeight);
        console.log("when up arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + blockImageHeight;
        console.log("blockImageHeight=" + blockImageHeight);
        console.log("when down arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockImageWidth;
        console.log("blockImageWidth=" + blockImageWidth);
        console.log("when left arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if (playerX <= 850) {
        playerX = playerX + blockImageWidth;
        console.log("blockImageWidth=" + blockImageWidth);
        console.log("when right arrow key is pressed, x = " + playerX + " ,Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}