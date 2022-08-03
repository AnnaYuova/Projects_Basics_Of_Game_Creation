window.onload = function() {
	canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
	requestAnimationFrame(update);
};

class ZvukOn{
	constructor(x,y,k,l,z){
        this.img;
		this.x=x;
		this.y=y;
		this.k=k;
        this.l=l;
        this.z=z;
	}
    
	draw()
	{
		this.img = new Image();
		if(this.z==1)this.img.src = "img/zvuk.png";
        else if(this.z==2)this.img.src = "img/zvukoff.png";
		ctx.drawImage(this.img,this.x,this.y,this.k,this.l);
    }
    
}

class ZvukOff{
    constructor()
    {
        this.zvuky = [];
    }
}

var zvukkk = new ZvukOff();
    zvukkk.zvuky.push(new ZvukOn(860,18,80,60,1));



document.addEventListener("click", function(event)
{
    var xMys = event.pageX; //x-ova tam, kde klikne
    var yMys = event.pageY; //y-ova tam, kde klikne
    if (xMys>=zvukkk.zvuky[0].x+10 && xMys<=zvukkk.zvuky[0].x + zvukkk.zvuky[0].k &&
        yMys>= zvukkk.zvuky[0].y && yMys<=zvukkk.zvuky[0].y + zvukkk.zvuky[0].l+10)
    {
        if(zvukkk.zvuky[0].z==2)
        {
            zvukkk.zvuky[0].z=1;
            hudba.noloop = false;
            hudba.play();
        }else{  
            zvukkk.zvuky[0].z=2;
            hudba.pause();
        }
    }
});
