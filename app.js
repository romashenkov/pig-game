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

dice = Math.floor(Math.random() * 6) + 1; /*random number from 1 to 6: Math.random gives a random num from 0 to 1, Math.floor extracts integer part*/

/*the object that gives us access to the DOM is the document object*/
document.querySelector('#current-' + activePlayer).textContent = dice; /*querySelector finds an element in DOM by an id; textContent changes the plain TEXT of the element*/

/*document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // innerHTML changes the HTML element*/

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none' /*we change the property in CSS class selector in order to hide the random dice in the begining*/
