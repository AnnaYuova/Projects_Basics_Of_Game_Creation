class Nepriatel {
	constructor(x, y, width, height, z)
	{
		this.img;
		this.x = x;
        this.y = y;
        this.z = z;
		this.width = width;
        this.height = height;
    } 
    
	draw()
	{
        this.img = new Image();
        if(this.z==1)this.img.src = "img/car2.png";
        else if(this.z==2)this.img.src = "img/car3.png";
        else if(this.z==3)this.img.src = "img/car4.png";
        ctx.drawImage(this.img, this.x+20, this.y+235, this.width, this.height);
    }
    
    move()
    {
        if (postava.score < 50)
        {
            this.x-=2;
        };
        if (postava.score > 50)
        {
            this.x-=3;
        }
        if (postava.score > 130)
        {
            this.x-=3.5;
        }
    }

    renew()
    {
        if(this.x<=-250)
        {
            this.x=1000;
            if(this.y<0)this.y=Math.floor(Math.random() * 100) + 50; //vygeneruje cislo cca 50-150 random y-ova suradnica
            else{  
                this.y=Math.floor(Math.random() * 100) + 50; //to iste len to da do opacneho pruhu
                this.y = -this.y;
            } 
        }
    }
}

class Screen{
    constructor()
    {
        this.nepriatelia = [];
    }
}

var enemy = new Screen();
var pom;

for(var i=1;i<4;i++){ 
    console.log(i);
    pom = Math.floor(Math.random() * 100) + 50;
    if(i%2==0)enemy.nepriatelia.push(new Nepriatel(600+500*i,-pom,200,180,i));
    else enemy.nepriatelia.push(new Nepriatel(600+500*i,pom,200,180,i));
}