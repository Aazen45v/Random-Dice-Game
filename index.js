var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomNumber1+ ".png";

var randomSouceImages = "images/" + randomDiceImage;

var image1= document.querySelectorAll("Img")[0];

image1.setAttribute("src", randomSouceImages);



var randomNumber2= Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomNumber2+ ".png";

var randomSouceImages2 = "images/" + randomDiceImage2;

var image2= document.querySelectorAll("Img")[1];

image2.setAttribute("src", randomSouceImages2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML=("--1st Player Wins--")
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML=("--2st Player Wins--") 
}
else
{
    document.querySelector("h1").innerHTML=("DRAW!")
}