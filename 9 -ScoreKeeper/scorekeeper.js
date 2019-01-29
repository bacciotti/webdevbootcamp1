var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var playingTo = document.querySelector("#playingTo");
var p1Score = 0;
var p2Score = 0;
var scoreA = document.querySelector("#scoreA");
var scoreB = document.querySelector("#scoreB");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("#inputNumber");



p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore) {
			scoreA.classList.add("winner");
			gameOver = true;
		}
		scoreA.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore) {
			scoreB.classList.add("winner");
			gameOver = true;
		}
		scoreB.textContent = p2Score;
	}
});





numInput.addEventListener("change", function(){
	playingTo.textContent = Number(numInput.value);
	winningScore = Number(numInput.value);
	resetarJogo();
});

reset.addEventListener("click", function(){
	resetarJogo();
});

function resetarJogo(){
	p1Score = 0;
	p2Score = 0;
	scoreA.textContent = 0;
	scoreB.textContent = 0;
	scoreA.classList.remove("winner");
	scoreB.classList.remove("winner");
	gameOver = false;
}