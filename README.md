# The Mars Rover Project

This is a project that has a rover traverse a plateu on Mars. The rover will be given instructions on what position to face and when to move.

# Functionality
The plateu is a 5 by 5 grid that has a x and y axis. The rover will have coordinates for the x and y axis and the direction it is facing. For instance, the rover can have a start postion of 0 0 N and can be given the instruction R M which will rotate the rover to the right and move it once, its position will now be 1 0 E.

# Approach
The approach I took is the TDD method. I found this most effectove as breaking each part down into a test allowed me to think of solutions. For example, I made test cases for moveLeft, moveRight and move functions before I combined it into one function. This allowed me to ensure the functions worked as I intended and made it easier to develop instead of doing it all in one function

## Instructions

- Give your repository a name and click "Create repository from template"

- Clone down your new repository to your computer

- Navigate to the directory on your command line

- Run `npm install` followed by `npm test` to run the tests

