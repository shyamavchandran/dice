var random1=Math.floor((Math.random()*6))+1;
var imagesource="images/dice"+random1+".png";
document.querySelector("img.img1").setAttribute("src",imagesource);

var random2=Math.floor((Math.random()*6))+1;
    imagesource="images/dice"+random2+".png";
document.querySelector("img.img2").setAttribute("src",imagesource);

if(random1>random2){
  document.querySelector("h1").innerHTML=" 🚩Player 1 wins";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
