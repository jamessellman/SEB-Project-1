General Assembly Project One:

Sharker is a game based on the grid based game Frogger. The objective of the game is to navigate your scuba diver from the open ocean, to safety on the beach. If your Scuba diver runs into the path of one of the hungry sharks or falls into a volcano then it they are sent back to the start. The player has 3 lives to navigate to safety otherwise it is game over!

Link to game: https://jamessellman.github.io/SEB-Project-1/

Overview and Concept:

I was given 1 week to build a grid based game of my choice using a combination of HTML, CSS and JavaScript. I chose the game Frogger and my version is underwater themed with moving sharks and stationary volcanos to avoid. The further a player progresses across the board, they will recieve points and encournter faster moving sharks.

Technologies Used:

HTML

- A header
- Div with containing paragraphs for player information, such as lives, score and highscore.
- Grid with 10 rows and 9 columns making a total of 90 cells.
- Divs which are used as modals to create an opening pop up with a start button, as well as pop ups for winning and losing the game. Both the latter pop up includes reset buttons to play again.

CSS

- Grid using flex-box.
- URL adding background images as well as images for the objects and player
-

Javascript

- keyCode.events to record player input
- set interval to move objects
- click events to start and reset game
- display and hide modals
- collision detection that checks if 2 classes are in the same cell

Day 1:

- pseudo coded and wire framed design
- created grid
- added a placeholder for the player and created movement patterns
- added placeholders for obsticles

Day 2:

- worked on collision detection (for player moving into object)
- worked on getting the sharks to move

Day 3:

- Further work on collision detection which now detected if shark moved into player
- added lives to the played
- created a fundamental scoring system
- added a function if you lost the game
- added a function to win the game
- added a function to reset the game

Day 4:

- added welcome modal to display when page loads
- added modal to display when player loses the game with reset button
- added modal to display when the player wuns the game with reset button
- Style via CSS on player, objects and background.
- Refactored the functions which control how the shark objects moved

Day 5:

- Refactored code created a bug which I was unable to solve in time for deployment
- Reverted code back to before refactoring to ensure it was in working order for deployment and presentation
- Due to the issues with refactoring I was unable to add some more styling and audio

Key Learnings:

- Refactoring code the night before a project is due is probably not the best course of action. Refectoring is quite difficult and can have knock on effects for the rest of the code. Plan ahead and leave plenty of time next time
- Style as you go along. Styling can also take a long time, and do not leave it all until the last minute.
- Learned how to use modals as pop ups.

Challenges:

- Big challenge I found was finding the time to stop intervals. If the start button or reset button is pressed, the moving object rows continue to speed up until the point the game becomes unplayable.

Future improvments:

- I would like to fix my factoring to ensure the code is much DRYer
- I would like to add more players and levels with increasing difficulty
- I would like to vary how the objects move accross the page, with less predictablity
- Add sound effects
- Add a warning such as an alert if you hit an object to make it more clear you have lost a life, other than player just resetting.

Bugs:

- As the game currently plays there are no obvious bugs
- However, the refactored code has a bug there the interval of the moving objects to do stop. Meaning that upon set of game, the moving objects speed up on every reset. As a consequence if the game is restarted a few time it becomes unwinnable as the objects are moving too fast to be able to navigate through.
