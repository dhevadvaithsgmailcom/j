var canvas = new fabric.Canvas('myCanvas');

player_y= 10;
player_x= 10;

img_width= 30;
img_height= 30;

var playerobject="";
var imgobject= "";


function playerupdate(){
    fabric.Image.fromURL("images.jpg", function(Img)
    {playerobject=Img;
     playerobject.scaleToWidth(150);
     playerobject.scaleToHeight(140);

    playerobject.set({ top:player_y, left:player_x });
    canvas.add(playerobject); });

      
}


function newimg(getimg){
    fabric.Image.fromURL(getimg, function(Img)
    {imgobject=Img;
     imgobject.scaleToWidth(img_width);
     imgobject.scaleToHeight(img_height);

    imgobject.set({ top:player_y, left:player_x });
    canvas.add(imgobject); });

      
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true && keypressed=='80')
    {console.log("p and shift key pressed together")
     
    img_width=img_width+10;
    img_height=img_height+10;
    document.getElementById("current_width").innerHTML=img_width;
    document.getElementById("current_height").innerHTML=img_height;}

    if (e.shiftKey==true && keypressed=='77')
    {console.log("m and shift key pressed together")
     
    img_width=img_width-10;
    img_height=img_height-10;
    document.getElementById("current_width").innerHTML=img_width;
    document.getElementById("current_height").innerHTML=img_height;}

if (keypressed=='38')
{console.log("up key is pressed");
up();}

if (keypressed=='40')
{console.log("down key is pressed");
down();}

if (keypressed=='37')
{console.log("left key is pressed");
left();}

if (keypressed=='39')
{console.log("right key is pressed");
right();}

if (keypressed=='76')
{console.log("l key is pressed");
newimg=("ironman_legs.png");}

if (keypressed=='69')
{console.log("e key is pressed");
newimg=("ironman_left_hand.png");}

if (keypressed=='73')
{console.log("i key is pressed");
newimg=("ironman_right_hand.png");}

if (keypressed=='66')
{console.log("b key is pressed");
newimg=("hulkd_body.png");}

if (keypressed=='70')
{console.log("f key is pressed");
newimg=("spiderman_face.png");}}

function up(){
    if (player_y>=0)
    {player_y=player_y-img_height;
     canvas.remove(playerobject);
     playerupdate();}
}

function down(){
    if (player_y<=500)
    {player_y=player_y+img_height;
     canvas.remove(playerobject);
     playerupdate();}
}

function left(){
    if (player_x>=0)
    {player_x=player_x-img_width;
     canvas.remove(playerobject);
     playerupdate();}
}

function right(){
    if (player_y<=900)
    {player_x=player_x+img_width;
     canvas.remove(playerobject);
     playerupdate();}
}