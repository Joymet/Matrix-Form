const asciiArt = `                 uuuuuuu
             uu$$$$$$$$$$$uu
          uu$$$$$$$$$$$$$$$$$uu
         u$$$$$$$$$$$$$$$$$$$$$u
        u$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$"   "$$$"   "$$$$$$u
       "$$$$"      u$u       $$$$"
        $$$u       u$u       u$$$
        $$$u      u$$$u      u$$$
         "$$$$uu$$$   $$$uu$$$$"
          "$$$$$$$"   "$$$$$$$"
            u$$$$$$$u$$$$$$$u
             u$"$"$"$"$"$"$u
  uuu        $$u$ $ $ $ $u$$       uuu
 u$$$$        $$$$$u$u$u$$$       u$$$$
  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
 """      ""$$$$$$$$$$$uu ""$"""
           uuuu ""$$$$$$$$$$uuu
  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
  $$$$$$$$$$""""           ""$$$$$$$$$$$"
   "$$$$$"                      ""$$$$""
     $$$"                         $$$$"
`;

const asciiElement = document.getElementById('asciiArt');
asciiElement.textContent = asciiArt;


var c = document.getElementById("c");
var ctx = c.getContext("2d");


c.height = window.innerHeight;
c.width = window.innerWidth;


var matrix = "el pepe eso tilin niño del oxxo ete sech potaxio";


matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)
    drops[x] = 1; 



function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "red" ;
    ctx.font = font_size + "px arial";

    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
    
        ctx.fillText(text, i*font_size, drops[i]*font_size);

       
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        
        drops[i]++;
    }
}

setInterval(draw, 35);

setTimeout(function() {
    window.location.replace("pepe.html");
  }, 9000);


setTimeout(function() {
    window.close();
  }, 10000); 



