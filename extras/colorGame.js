function randomColorGenerator()
{
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}
var colors=[];
var divs=[];
var winnerColor;
//console.log(randomColorGenerator());
var len=6;
document.querySelector("#hard").classList.add("selected");
document.querySelector("#easy").addEventListener("click", function(){
    len = 3; 
    set();
    this.classList.toggle("selected");
    document.querySelector("#hard").classList.toggle("selected");
    for(var i=3;i<6;i++)
    {
        divs[i].style.backgroundColor="rgb(23, 23, 23)";
    }
});
document.querySelector("#hard").addEventListener("click", function(){
    len =6; 
    set();
    this.classList.toggle("selected");
    document.querySelector("#easy").classList.toggle("selected");
});


var messi = document.querySelector("#message");
set();
document.querySelector("button").addEventListener("click", function(){set();});
function set(){
    document.querySelector("#message").textContent="";
    document.querySelector("button").textContent="change color";
    document.querySelector("h1").style.backgroundColor="steelblue";
    for(var i=0;i< len; i++)
    {
        colors[i]=randomColorGenerator();
    }
    winnerColor= colors[Math.floor(Math.random() * len)];
    divs=document.querySelectorAll(".square");
    document.querySelector("span").textContent = winnerColor;
    for(var i=0;i<len;i++)
    {
         divs[i].style.backgroundColor=colors[i];
         divs[i].addEventListener("click", function(){
         if(this.style.backgroundColor===winnerColor)
         {//alert("You've Won");
              win();
              messi.textContent = "Correct";
         }
         else
         {//alert("Try Again");
              this.style.backgroundColor = "rgb(23, 23, 23)";
              messi.textContent = "Try Again";
         }

    });
  }
}

function win()
{
    // document.querySelector("#hard").style.backgroundColor=winnerColor;
    document.querySelector("button").textContent="Play Again?";

    for(var i=0;i<len;i++)
    {
        divs[i].style.backgroundColor=winnerColor;
        document.querySelector("h1").style.backgroundColor=winnerColor;
    }
 }


