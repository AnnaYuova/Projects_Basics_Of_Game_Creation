window.onload = function() 
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("pozadie");
    ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight);
}