# SEB 78 Project 1: Sharker

# Description:

- For project 1 of General Assembly SEB 78, I was tasked with creating a functioning grid-based game. Introducing "Sharker," an underwater adaptation of the popular game Frogger. In this game, the objective is to guide your scuba diver from the vast open ocean to safety on the beach. However, beware! Hungry sharks patrol the waters, and falling into a volcano spells disaster, sending your scuba diver back to the starting point. Players are given three lives to navigate to safety, or it's game over!

![alt text](<Screenshot 2024-05-10 at 11.44.01.png>)

# Link to deployed game:

https://jamessellman.github.io/SEB-Project-1/

# Getting Started/Code Installation

# Brief

- A **working game, built by you**, hosted somewhere on the internet
- A **link to your hosted working game** in the URL section of your Github repo
- A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
- **A `readme.md` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. (completed post project)

# Timeframe & Working Team:

This was a solo project and I was given 1 week to build a grid based game of my choice using a combination of HTML, CSS and JavaScript. I chose the game Frogger and my version is underwater themed with moving sharks and stationary volcanos to avoid. The further a player progresses across the board, they will receive points and encounter faster-moving sharks.

# Technologies Used:

HTML:

- Div containing paragraphs for player information, such as lives, score, and high score.
- Grid with 10 rows and 9 columns, making a total of 90 cells.
- Divs used as modals to create an opening pop-up with a start button, as well as pop-ups for winning and losing the game. Both the latter pop-ups include reset buttons to play again.

CSS:

- Grid using flexbox.
- URL adding background images as well as images for the objects and player.

JavaScript:

- Utilised keyCode events to record player input.
- Employed setInterval to move game objects at regular intervals.
- Incorporated click events to facilitate starting and resetting the game.
- Implemented functionality to display and hide modals for user interaction.
- Utilized collision detection algorithms to check if two classes occupy the same grid cell.

# Build/Code Process

# Day 1:

- Firstly I began by wireframing my design using canva. I wanted to show a basic set up where I would place the static volcanos and moving sharks to show to my instructor for sign off.

![alt text](<Screenshot 2024-05-10 at 12.13.18.png>)

## Playing grid set up:

- With the sign-off, I began creating my project by setting up the playing grid. I used a div with the class name of "grid" inside another div within HTML, while utilizing CSS to define the size of the grid. Using a JavaScript variable called cells, four variables were initialized to determine the dimensions of the grid. Firstly, a width variable was set to 9 as the grid needed to be 9 cells wide.
- A cellCount variable was created by multiplying the width by 10. This ensured that the grid would have a height of 10 cells, resulting in a total of 90 cells.
- Additionally, an empty array was created to store the individual cells that would be later appended to construct the grid. Finally, a variable was defined with a query selector to target the appropriate div in the HTML. I implemented a function to render the grid. This involved iterating through a loop and adding a new cell on each iteration until the loop reached the value defined by the cellCount variable. This process ensured the complete rendering of the grid with the desired number of cells.

![alt text](<Screenshot 2024-03-27 at 13.44.18.png>)

![alt text](<Screenshot 2024-03-27 at 13.52.34.png>)

## Adding Player and movement:

- With a grid in place, I added an image of a scuba diver using a function to push the image to a specific cell index on the grid. Next, I needed to move that image around the grid using the keyboard arrow keys. Using the player's current index, for example, to move up one cell, the index of the current cell minus the width variable (representing the number of cells in each row) would place the player in the cell directly above the current one.
- Similar logic was applied for other directions by decrementing or incrementing the index accordingly. Additionally, conditions were inserted within the handleKeydown function to restrict movement when the player reached the outermost cells of the grid. For instance, if the player was in the leftmost column, movement to the left would be restricted.
- This was accomplished using logical operators (&&) to specify such restrictions based on the player's position. To achieve smooth player movement across the grid, I implemented a removePlayer function triggered by arrow key presses. This function erases the player's image from its current cell before adding it to the new one. This seamless transition creates the illusion of fluid movement, enabling the player to navigate freely around the grid

![alt text](<Screenshot 2024-03-27 at 13.56.53.png>)

![alt text](<Screenshot 2024-03-28 at 09.25.15.png>)

![alt text](<Screenshot 2024-03-28 at 13.46.03.png>)

## Adding obsticals to the grid:

- I established the positions of immovable obstacles (volcanoes) within my playing grid by utilizing three arrays representing their coordinates. I then created functions to iterate through these arrays and dynamically add placeholder obstacle images to the grid.
- These functions looped through the arrays, identifying specified positions, and appended obstacle images accordingly.

![alt text](<Screenshot 2024-03-28 at 13.46.03-1.png>)

![alt text](<Screenshot 2024-03-28 at 14.09.18.png>)

# Day 2:

## Adding moving obsticals (sharks):

- Adding moving objects followed a similar approach to adding immovable objects. I utilized variables containing arrays to store the positions for each shark, then iterated through these arrays using a function to add the shark images to the grid.
- Unlike immovable objects, I implemented a function to move sharks, which removes a shark from its current cell before repositioning it elsewhere on the grid. Using the shark position variable, I created a function to simulate horizontal movement by incrementing each position by 1. Afterward, the move shark function calls the remove shark function to clear the original position and then adds the shark to the new position.
- The move shark function is triggered at intervals, allowing for controlled and variable timing.
- I defined an endpoint for the sharks' movement using an if statement. If any number in the array reaches this endpoint, the sharks reset to their original positions. This ensures continuous movement across the grid, creating the illusion of sharks moving from left to right.
- This process was repeated three more times to introduce four sets of moving sharks, enhancing the gameplay experience.

![alt text](<Screenshot 2024-03-28 at 14.12.28.png>)

![alt text](<Screenshot 2024-03-28 at 14.17.06.png>)

## Collision detection:

- I focused on implementing collision detection next. I created an "impact" function to handle this task. When a cell contained both the player and a shark or an immovable object, the "impact" function triggered, causing the player to return to their original position, indicating a collision.
- Initially, the "impact" function was only called when an arrow key was pressed, meaning collision detection occurred only when the player moved into an object. However, I recognized the need to enhance this functionality to detect collisions when an object moved into the player's cell.

![alt text](<Screenshot 2024-03-28 at 14.21.58.png>)

# Day 3:

## Fixing collision detection & end game:

- I improved the impact function by calling it each time a shark moved, allowing detection of whether a shark was in the same cell as the player. This enabled collisions between the player and sharks, resetting the player to their original position, akin to the mechanics of Frogger.
- Additionally, I introduced a "lives" variable to track the player's lives. The game started with three lives, and each collision resulted in the player losing a life.
- To handle the end-game scenario, I implemented an "endGame" function. This function checked if the player's lives reached zero. If so, it stopped the intervals controlling each moving shark, removed the sharks from the grid, reset the player to their initial position, and displayed a modal with a "Game Over" message, providing a definitive conclusion to the game when the player's lives were exhausted.

![alt text](<Screenshot 2024-03-28 at 14.25.57.png>)

![alt text](<Screenshot 2024-03-28 at 14.26.48.png>)

## Win game, scoring & game reset:

- I implemented a "winGame" function to detect if the player reached the topmost row of the grid. Upon reaching this point, the game would conclude, and a modal displaying a "Win" message would appear, indicating the player's victory.
- To introduce a simple scoring system, I created a "playerScore" variable. This variable incremented by 100 points each time the player moved up a row on the grid and deducted 100 points if the player moved down a row. The player's score was stored in local storage within the browser, allowing for tracking of high scores and providing an incentive for players to beat their previous records.
- A reset function was implemented to reset the player's score and lives, as well as reposition each moving object to its starting position. This function was linked to a button on both the winning and losing modals, allowing players to restart the game if desired.

![alt text](<Screenshot 2024-03-28 at 14.30.40.png>)

![alt text](<Screenshot 2024-03-28 at 14.32.36.png>)

# Day 4:

## Opening modal & stying:

- On the fourth day of development, with a basic game in place, I enhanced the player experience by adding a welcome modal. This modal provided instructions on how to play and featured a "Start" button, offering clear guidance and improving the overall user experience.
- During this phase, I focused on styling the game to enhance its visual appeal. Using CSS, I incorporated images for the player, obstacles, and sharks, along with a beach image at the top of the grid to signify safety and the end of the game. These visual enhancements aimed to create a more immersive and engaging experience for players.
- At the end of day 4, I refactored some code for better efficiency. I consolidated four separate functions into one by restructuring the original shark positions into an object. This allowed for more organized and cohesive code, simplifying the process of updating shark positions.

![alt text](<Screenshot 2024-03-28 at 14.34.21.png>)

![alt text](<Screenshot 2024-03-28 at 14.39.36.png>)

![alt text](<Screenshot 2024-03-28 at 14.40.49.png>)

# Day 5:

- On day 5, as I prepared to submit my project, I encountered a bug during morning testing. The bug arose from the refactored code: when the player pressed reset, the shark interval timer did not stop. As a result, with each game reset, the sharks moved faster, rendering the game unplayable.
- To ensure the project was in a working state for deployment and presentation, I reverted the code back to its state before refactoring. This resolved the issue and allowed the game to function as intended without complications.
- Unfortunately, due to the time spent resolving the refactoring issues, I was unable to finalize my styling and implement planned audio features. These tasks will be priorities for future development iterations.

# Images of final game.

- Opening modal
  ![alt text](<Screenshot 2024-03-28 at 14.47.38.png>)

- In play
  ![alt text](<Screenshot 2024-03-28 at 14.48.11.png>)

- Lose Modal
  ![alt text](<Screenshot 2024-03-28 at 14.48.44.png>)

- Winning Modal
  ![alt text](<Screenshot 2024-03-28 at 14.49.23.png>)

# Key Learnings:

- Reflecting on the experience, refactoring code the night before a project deadline proved challenging. Refactoring is complex and can have unforeseen effects on other parts of the code. In the future, I'll plan ahead and allocate ample time for refactoring, ensuring sufficient opportunity to address any arising issues.
- Additionally, I've learned the importance of styling throughout the development process. Leaving styling until the last minute can lead to rushed and potentially subpar results. By incorporating styling tasks into the workflow from the outset, I can maintain consistency and coherence in the visual design of the project.
- Furthermore, this project provided an opportunity to learn how to implement modals as pop-ups, enhancing the user experience by providing clear and intuitive interaction prompts. This new skill will be valuable for future projects, allowing for effective integration of user interface elements to enhance usability and engagement.

# Challenges:

- The main challenge I encountered was creating a restart/reset button for the game. Initially, this was solved by allowing the reset button to be pressed only after the game ended, ensuring that intervals controlling shark movement were cleared. However, after refactoring to streamline my functions, the reset button no longer cleared the intervals, causing the game to continually speed up and become unplayable. Despite efforts during the project, I was unable to find a solution and reverted to my original code.

# Future improvments:

- Refactor the code to improve DRYness.
- Add more players and levels with increasing difficulty.
- Implement varied movement patterns for objects to increase unpredictability.
- Incorporate sound effects.
- Include a warning, such as an alert, when the player hits an object to indicate a lost life instead of simply resetting.

# Bugs:

- While the current version of the game appears to be free of obvious bugs, there is an issue with the refactored code where the interval controlling the speed of moving objects does not stop. Consequently, upon resetting the game, the speed of the moving objects increases with each iteration. This results in the game becoming unwinnable after several restarts, as the objects move too quickly to navigate through.
