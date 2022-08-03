var ctx;
var canvas;
var hudba = new Audio('./snd/pocasHry.mp3');
var nehoda = new Audio('./snd/zoberZivot.wav');
var cink = new Audio('./snd/plusBody.wav');
var uvod = new Audio('./snd/uvod.wav');
var stav = 8;

window.onload = function() {
	canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
	requestAnimationFrame(update);
};

var keys = {};
window.onkeydown=function(event) 
{
    keys[event.keyCode] = true;
};

window.onkeyup=function(event) 
{
    keys[event.keyCode] = false;
};

var auto;
auto = new Image();
auto.src = "img/car.png";


class Postavicka {
	constructor(img, x, y, width, height)
	{
		this.img = img;
		this.x = 0;
		this.y = 0;
		this.width = width;
        this.height = height;
        this.stav=true;
        this.score=0;
    } 
    
    kontrolaHranic() //aby nevyšiel spoza ohraničených čiar
    {
        if (this.y <= -190)
        {
            this.stav = false;
        }
        else
        {
            this.stav = true;
        }
    }
    
	ondraw() 
	{
        ctx.drawImage(this.img, this.x+40, this.y+235, this.width, this.height);
    }
    
    onmove()
    {
        if ( keys[38] && this.stav == true && this.y>=-190) this.y-=8;
        else if ( keys[40] && this.stav == false ) this.y+=8;
        else if ( keys[40] && this.stav == true && this.y<=175 ) this.y+=8;
    }

    countScore() //spočítava skore
    {
        if (pauzaa.pause[0].z==1)
        {
            this.score+=0.03;
        }
		ctx.font = "30px Arial";
        ctx.fillText("Body "+this.score.toFixed(0), 80, 60);
        ctx.fill();
    }

    printScore() //vypise na gameover
    {
        ctx.font = "50px Arial";
        ctx.fillStyle= "white";
        ctx.fillText("Body "+this.score.toFixed(0), 400, 350);
        ctx.fill();
    }

}

postava= new Postavicka(auto, this.x, this.y, 180, 180);

function update()
{
    if(stav==1) //autmaticky po zacati hry
    {
        uvod.pause();
        if(zvukkk.zvuky[0].z==1 && pauzaa.pause[0].z==1)
        {   
            hudba.loop = false;
            hudba.play();
        }
        if(pauzaa.pause[0].z==2)
        {   
            hudba.loop = false;
            hudba.pause();
        }
        var pozadie;
        pozadie = new Image();
        pozadie.src = "img/background.png"
        ctx.drawImage(pozadie, 0, 0, canvas.clientWidth, canvas.clientHeight);
        postava.ondraw();
        hranica.draw();
        postava.kontrolaHranic();
        enemy.nepriatelia[0].draw();
        enemy.nepriatelia[0].renew();
        body.bonus[0].draw();
        body.bonus[0].renew();
        zvukkk.zvuky[0].draw();
        pauzaa.pause[0].draw();
        
        enemy.nepriatelia[1].draw();
        enemy.nepriatelia[1].renew();
        
        enemy.nepriatelia[2].draw();
        enemy.nepriatelia[2].renew();

        postava.countScore();
        if(pauzaa.pause[0].z == 1)
        {
            postava.onmove();
            enemy.nepriatelia[0].move();
            body.bonus[0].move();
            enemy.nepriatelia[1].move();
            enemy.nepriatelia[2].move();
        }

    }
    if(stav==2) //vykresli game over
    {        
        ctx.fillRect(0, 0, 1000, 550);
        var over;
        over = new Image();
        over.src = "img/gameover.jpg";
        ctx.drawImage(over, 0, 0, 1000, 550);
        postava.printScore();
        ctx.fill();
        uvod.play();
        uvod.loop=false;
    }

    if(stav==8) //vykresli menu
    {        
        uvod.play();
        uvod.loop=false;
        ctx.fillRect(0, 0, 1000, 550);
        var menu;
        menu = new Image();
        menu.src = "img/menu.png";
        ctx.drawImage(menu, 0, 0, 1000, 550);
        pauzaa.pause[1].draw();
        ctx.fill();
       
    }

    if(stav==0) //zakomentovat
    {
        var pozadie;
        pozadie = new Image();
        pozadie.src = "img/background.png";
        ctx.drawImage(pozadie, 0, 0, canvas.clientWidth, canvas.clientHeight);
        postava.ondraw();
        hranica.draw();
        enemy.nepriatelia[0].draw();
        enemy.nepriatelia[1].draw();
        enemy.nepriatelia[2].draw();
        body.bonus[0].draw();
    }

    if (stav==3) //bonus
    {
        cink.play();
        cink.loop=false;
        postava.score+=10;
        body.bonus[0].x=-968474374;
        stav=1;
    }
    
    for(var a=0;a<i;a++) //kontrola narazu aut
    {
        if(
             (enemy.nepriatelia[a].x+26 <= postava.x+postava.width && enemy.nepriatelia[a].x+enemy.nepriatelia[a].width-75 >= postava.x)
             &&
             (enemy.nepriatelia[a].y+70 <= postava.y+postava.height && enemy.nepriatelia[a].y+enemy.nepriatelia[a].height-90  >= postava.y)
             && stav==1
             )
        {
            hudba.pause();
            nehoda.play();
            nehoda.loop=false;
            stav=2;
        }
    }
    for(var b=0;b<2;b++) //kontrola narazu bonusov
    {
        if(
             (body.bonus[b].x+75 <= postava.x+postava.width && body.bonus[b].x+body.bonus[b].width-35 >= postava.x)
             &&
             (body.bonus[b].y+30 <= postava.y+postava.height && body.bonus[b].y+body.bonus[b].height-105  >= postava.y)
          )
        {
            hudba.pause();
            nehoda.pause();
            stav=3 ;
        }
    }
    requestAnimationFrame(update);
}
update()





