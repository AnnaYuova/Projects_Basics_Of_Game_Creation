var hranica=
{
    x: 0,
    y:95,
};

hranica.draw = function()
{
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(hranica.x, hranica.y);
    ctx.lineTo(hranica.x+1000, hranica.y);
    ctx.stroke();
    ctx.closePath();
};

