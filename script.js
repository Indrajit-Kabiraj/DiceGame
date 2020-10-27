var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSource1 = "die"+randomNumber1+".png";
var imageE = document.querySelectorAll('img')[0];
imageE.setAttribute("src",imageSource1); 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "die"+randomNumber2+".png";
var imageEl = document.querySelectorAll('img')[1];
imageEl.setAttribute("src",imageSource2); 
if(randomNumber1>randomNumber2){
	document.querySelector('h2').innerHTML = "&#128681; Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
	document.querySelector('h2').innerHTML = "&#128681; Player 2 Wins!";
}
else{
	document.querySelector('h2').innerHTML = "Draw!!!!";
}