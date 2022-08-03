window.onload = function() {
	canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
	requestAnimationFrame(update);
};

class Pauza{
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
		if(this.z==1)this.img.src = "img/pauza.png";
        else if(this.z==2)this.img.src = "img/pauzaOff.jpg";
		ctx.drawImage(this.img,this.x,this.y,this.k,this.l);
    }
    
}

class Pauzicka{
    constructor()
    {
        this.pause = [];
    }
}

var pauzaa = new Pauzicka();

pauzaa.pause.push(new Pauza(760,18,80,60,1));
pauzaa.pause.push(new Pauza(800,200,100,100,2)); //na menu


document.addEventListener("click", function(event)
{
    var mysX = event.pageX; //x-ova tam, kde klikne
    var mysY = event.pageY; //y-ova tam, kde klikne
    if (mysX>=pauzaa.pause[0].x+10 && mysX<=pauzaa.pause[0].x + pauzaa.pause[0].k+10 &&
        mysY>= pauzaa.pause[0].y+10 && mysY<=pauzaa.pause[0].y + pauzaa.pause[0].l+10)
    {
        if(pauzaa.pause[0].z==2)
        {
            pauzaa.pause[0].z=1;
		}
		else
		{  
            pauzaa.pause[0].z=2;
		}
	}
	if (mysX>=pauzaa.pause[1].x+10 && mysX<=pauzaa.pause[1].x + pauzaa.pause[1].k+10 &&
        mysY>= pauzaa.pause[1].y+10 && mysY<=pauzaa.pause[1].y + pauzaa.pause[1].l+10)
    {
        stav =1;
    }
});