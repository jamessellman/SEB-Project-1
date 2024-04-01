# SEB 78 Project 1:

# Objective

- For project 1 of General Assembly SEB 78, I was tasked with creating a functioning grid-based game. Introducing "Sharker," an underwater adaptation of the popular game Frogger. In this game, the objective is to guide your scuba diver from the vast open ocean to safety on the beach. However, beware! Hungry sharks patrol the waters, and falling into a volcano spells disaster, sending your scuba diver back to the starting point. Players are given three lives to navigate to safety, or it's game over!

# Link to game:

https://jamessellman.github.io/SEB-Project-1/

# Brief

- **Render a game in the browser**
- **Be built on a grid: do not use HTML Canvas for this**
- **Design logic for winning** & **visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it (we will do this together at the end of the project)
- Use **semantic markup** for HTML and CSS (adhere to best practices)

---

## Necessary Deliverables

- A **working game, built by you**, hosted somewhere on the internet
- A **link to your hosted working game** in the URL section of your Github repo
- A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
- **A `readme.md` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. (completed post project)

I was given 1 week to build a grid based game of my choice using a combination of HTML, CSS and JavaScript. I chose the game Frogger and my version is underwater themed with moving sharks and stationary volcanos to avoid. The further a player progresses across the board, they will recieve points and encournter faster moving sharks.

# Technologies Used:

HTML:

- Div with containing paragraphs for player information, such as lives, score and highscore.
- Grid with 10 rows and 9 columns making a total of 90 cells.
- Divs which are used as modals to create an opening pop up with a start button, as well as pop ups for winning and losing the game. Both the latter pop up includes reset buttons to play again.

CSS:

- Grid using flex-box.
- URL adding background images as well as images for the objects and player

Javascript:

- Utilized keyCode events to record player input.
- Employed setInterval to move game objects at regular intervals.
- Incorporated click events to facilitate starting and resetting the game.
- Implemented functionality to display and hide modals for user interaction.
- Utilized collision detection algorithms to check if two classes occupy the same grid cell.

# Build/Code Process

# Day 1:

- Developed pseudo code and wireframed the game design.
- Created the grid by setting up a div within the HTML with the class of "grid-wrapper" and another div inside it with the class of "grid".
- Utilized CSS to define the size of the grid and each individual cell within it, ensuring proper display on the page.

![alt text](<Screenshot 2024-03-27 at 13.44.18.png>)

- Four variables were initialized to determine the dimensions of the grid. Firstly, a width variable was set to 9 as the grid needed to be 9 cells wide. Then, a cellCount variable was created by multiplying the width by 10. This ensured that the grid would have a height of 10 cells, resulting in a total of 90 cells.
- Additionally, an empty array was created to store the individual cells that would be later appended to construct the grid.
- Finally, a variable was defined with a query selector to target the appropriate div in the HTML.

![alt text](<Screenshot 2024-03-27 at 13.52.34.png>)

- I implemented a function to render the grid. This involved iterating through a loop and adding a new cell on each iteration until the loop reached the value defined by the cellCount variable. This process ensured the complete rendering of the grid with the desired number of cells.

  ![alt text](<Screenshot 2024-03-26 at 19.00.26.png>)

- After successfully rendering the grid on the page, I proceeded to create a function to add the player at a specific starting position on the grid. Additionally, I added a placeholder image for the player using CSS to ensure visual representation within the game environment.

  ![alt text](<Screenshot 2024-03-27 at 13.56.53.png>)

- With a placeholder image representing the player on the grid, the next step was to enable player movement using the arrow keys. Pressing the up arrow key moves the player up the grid, and similarly for other directions. This was achieved by calculating the new index based on the player's current position in the grid.
- For example, to move the player up, the index of the current cell minus the width variable (representing the number of cells in each row) would place the player in the cell directly above the current one. Similar logic was applied for other directions by decrementing or incrementing the index accordingly.
- Additionally, conditions were inserted within the handle keydown function to restrict movement when the player reached the outermost cells of the grid. For instance, if the player was in the leftmost column, movement to the left would be restricted. This was accomplished using logical operators (&&) to specify such restrictions based on the player's position.

![alt text](<Screenshot 2024-03-28 at 09.25.15.png>)

- To create the illusion of the player moving smoothly across the grid, I implemented a removePlayer function. This function is triggered whenever an arrow key is pressed to initiate movement. It removes the player's image from its current position, effectively erasing the player from the cell it previously occupied.

- By removing the player from its current position before adding it to the new cell, the player's movement appears seamless as it transitions from one cell to another. This combination of removing and adding the player in different cells allows the player to navigate and move freely around the grid.

![alt text](<Screenshot 2024-03-28 at 13.46.03.png>)

- I determined the placement of obstacles within my playing grid. Initially, I created three arrays to represent the positions on the grid where I intended the obstacles to be placed. These arrays contained the coordinates corresponding to the desired locations of the obstacles.

![alt text](<Screenshot 2024-03-28 at 13.46.03-1.png>)

- Subsequently, I developed functions to iterate through each array and dynamically add a placeholder image for obstacles to the grid. These functions systematically looped through the arrays, identifying the specified positions, and appended a placeholder image for obstacles at each of these positions on the grid.

![alt text](<Screenshot 2024-03-28 at 14.09.18.png>)

# Day 2:

- On the second day, our primary task was to introduce movable objects, specifically images of sharks, into the game. This process followed a similar approach to adding immovable objects, such as obstacles. We utilized variables containing arrays to store the positions for each shark, and then iterated through these arrays using a function to dynamically add the shark images to the grid.

- However, unlike immovable objects, we also needed to implement a function to remove a shark from its current cell, as these objects would be in constant motion. This removal function ensured that the shark's image was cleared from its current position before being repositioned elsewhere on the grid.

![alt text](<Screenshot 2024-03-28 at 14.12.28.png>)

- To enable the sharks to move horizontally across the grid, I implemented the following steps:
- Utilized the shark position variable and mapped through it to increment the position of each shark by 1, simulating horizontal movement.
- Called the addShark function to add the shark to the new position and remove it from the current position.
- Performed the mapping process on a set interval, allowing for controlled timing of the movement.
- Defined an endpoint for the sharks' movement using an if statement. If any of the numbers in the array hit this endpoint, the sharks would reset to their original positions. This ensured continuous movement across the grid, giving the illusion of the sharks moving from left to right.
- This process was repeated three more times to introduce four sets of moving sharks, further enhancing the gameplay experience.

![alt text](<Screenshot 2024-03-28 at 14.17.06.png>)

- Next, I directed my attention to implementing collision detection. I created a function named "impact" to handle this task. Whenever a cell contained both the player and a shark or an immovable object, the impact function would trigger, causing the player to return to their original position, indicating a collision with an object.
- Initially, the impact function was only called when an arrow key was pressed, meaning collision detection occurred only when the player moved into an object. However, I recognized the need to enhance this functionality to detect collisions when an object moved into the player's cell.

![alt text](<Screenshot 2024-03-28 at 14.21.58.png>)

# Day 3:

- I enhanced the impact function's functionality by calling it each time a shark moved, enabling detection of whether a shark was in the same cell as the player. This allowed for a shark to collide with the player, resulting in the player being reset to their original position, similar to the mechanics of the original Frogger game.
- Additionally, I introduced a "lives" variable to track the player's lives. The game would start with three lives, and each time an impact occurred, the player would lose a life.
- To handle the end game scenario, I implemented an "endGame" function. This function checked if the player's lives reached zero. If so, it terminated the intervals controlling each moving shark, removed the sharks from the grid, reset the player to their initial position, and displayed a modal with a "Game Over" message. This provided a definitive conclusion to the game when the player's lives were exhausted.

![alt text](<Screenshot 2024-03-28 at 14.25.57.png>)

![alt text](<Screenshot 2024-03-28 at 14.26.48.png>)

- In addition to the end game functionality, a "winGame" function was implemented. This function detected whether the player had reached the topmost row of the grid. If so, the game would conclude, and a modal displaying a "Win" message would appear, indicating the player's victory.
- To introduce a rudimentary scoring system, a "playerScore" variable was created. This variable incremented by 100 points each time the player moved up a row on the grid. Conversely, it deducted 100 points if the player moved down a row. The player's score was stored in local storage within the browser, allowing for the tracking of high scores and providing an incentive for players to beat their previous records.

![alt text](<Screenshot 2024-03-28 at 14.30.40.png>)

- On the final day of development, a "reset" function was implemented to reset the player's score and lives, as well as reposition each moving object to its starting position. This function was linked to a button on both the winning and losing modals, allowing players to restart the game if desired.

![alt text](<Screenshot 2024-03-28 at 14.32.36.png>)

# Day 4:

- By the fourth day of development, with a rudimentary working game in place, I decided to enhance the player experience by adding another modal to welcome players to the game. This modal included instructions on how to play, along with a "Start" button to begin the game. This additional feature provided players with clear guidance on how to navigate the game and added to the overall user experience.

![alt text](<Screenshot 2024-03-28 at 14.34.21.png>)

- During this phase of development, I focused on styling the game to enhance its visual appeal. I utilized CSS to incorporate images for the player, obstacles, and sharks, as well as a beach image at the topmost part of the grid to signify safety and the end of the game. This styling effort aimed to create a more immersive and engaging experience for players by adding visual elements that complemented the gameplay mechanics.
- At the end of day 4, I recognized the need to refactor some code for better efficiency. I observed that I had four separate functions performing similar tasks to move each row of sharks. To streamline this process, I opted to reformat the original shark positions into an object. This restructuring allowed me to simplify the code by iterating through the array and updating the positions of all sharks in a more organized and cohesive manner.

![alt text](<Screenshot 2024-03-28 at 14.39.36.png>)

- With the shark positions reformatted into an array, I was able to consolidate the moveSharkRow functions into a single, more efficient function.

![alt text](<Screenshot 2024-03-28 at 14.40.49.png>)

# Day 5:

- On day 5, as I prepared to hand in my project, I encountered a bug during testing in the morning. The bug was a result of the refactored code: when the player pressed reset, the shark interval timer did not stop. Consequently, with each game reset, the sharks would move faster and faster, rendering the game unplayable.
- To address this issue and ensure the project was in a working state for deployment and presentation, I reverted the code back to its state before refactoring. This ensured that the game would function as intended without the complications introduced by the bug.
- Unfortunately, due to the time spent resolving the issues with refactoring, I was unable to finalize my styling and implement planned audio features. These tasks will be priorities for future development iterations.

# Images of final game.

- Opening modal
  ![alt text](<Screenshot 2024-03-28 at 14.47.38.png>)

- In play game
  ![alt text](<Screenshot 2024-03-28 at 14.48.11.png>)

- Lose Modal
  ![alt text](<Screenshot 2024-03-28 at 14.48.44.png>)

- Winning Modal
  ![alt text](<Screenshot 2024-03-28 at 14.49.23.png>)

# Key Learnings:

- Reflecting on the experience, refactoring code the night before a project deadline proved to be a challenging decision. Refactoring is inherently complex and can have unforeseen effects on other parts of the code. In the future, I'll plan ahead and allocate ample time for refactoring, ensuring that there's sufficient opportunity to address any issues that may arise.
- Additionally, I've learned the importance of styling as I go along in the development process. Styling can be time-consuming, and leaving it all until the last minute can lead to rushed and potentially subpar results. By incorporating styling tasks into the development workflow from the outset, I can maintain consistency and coherence in the visual design of the project.
- Furthermore, this project provided an opportunity to learn how to implement modals as pop-ups, enhancing the user experience by providing clear and intuitive interaction prompts. This new skill will be valuable for future projects, allowing for the effective integration of user interface elements to enhance usability and engagement.

# Challenges:

- The main challenge I discovered was creating a restart/reset button to the game. This proved to be very tricky as it kept increasing the interval speed of the sharks moving in the game. This was initally solved by only allowing the user to press the reset button upon the games end, after the set intervals had been cleared. That being said, after refactoring to make my functions more concise, the reset button no longer cleared the intervals, hence the game continally speeding and rendering unplayable. During the project time, I didnt find the soluation, and reverted to my original code.

# Future improvments:

- I would like to fix my refactoring to ensure the code is much DRYer.
- I would like to add more players and levels with increasing difficulty.
- I would like to vary how the objects move accross the page, with less predictablity.
- Add sound effects.
- Add a warning such as an alert if you hit an object to make it more clear you have lost a life, other than player just resetting.

# Bugs:

- As the game currently plays there are no obvious bugs
- However, the refactored code has a bug there the interval of the moving objects to do stop. Meaning that upon set of game, the moving objects speed up on every reset. As a consequence if the game is restarted a few time it becomes unwinnable as the objects are moving too fast to be able to navigate through.
