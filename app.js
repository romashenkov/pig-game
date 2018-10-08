/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1; /* or 1 */

//dice = Math.floor(Math.random() * 6) + 1; 
/*random number from 1 to 6: Math.random gives a random num from 0 to 1, Math.floor extracts integer part*/

//document.querySelector('#current-' + activePlayer).textContent = dice; 
/*The object that gives us access to the DOM is the document object.
querySelector finds an element in DOM by an id. 
textContent changes the plain TEXT of the element.*/

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 
/*innerHTML changes the HTML element*/

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';
/*we change the property in CSS class selector in order to hide the random dice in the begining*/

//document.querySelector('.btn-roll').addEventListener('click', btn); 
/* We don't put parenthesis here because we actually don't call a function right now, we want it to be called by another function.
This function is called callback function. We pass it to another function as an argument*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Anonimus function usage (it's used only once and doesn't have a name):
document.querySelector('.btn-roll').addEventListener('click', function () {
	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	var diceDOM = document.querySelector('.dice'); 
	/* not to make selection over and over again while changing CSS properties*/
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


	// 3. Update the round score IF the rolled number was NOT a 1


});
