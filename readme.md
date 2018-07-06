**Tic Tac Rawr**

A web browser game of tic-tac-toe with a cute 16-bit monster theme. 

*Attempt 1. Day 1 and 2.*
I started off with the html structure and added the javascript and css as I went. 
I used divs and IDs to identify each box and manually coded all the winning possibilities for the win check.
It's working ok.. 

*Attempt 2. Day 3.*
There has to be a better way.. so for this attempt I tried focusing on making it work first using arrays in javascript, and using a code that's more adaptable (eg. for a bigger board). Instead of listing all the winning possibilities, I created functions to check for rows, columns, and the two diagonal win combos. 

*Day 4*
Tried adding some animation to the win function.

You can find the game here:
https://cset00.github.io/tic-tac-rawr/


Unresolved yet:
- Responsiveness. I'd probably have a set size for bigger screens, and adaptable size for smaller screens..
- While the javascript could handle a bigger board (eg. 5x5 instead of 3x3), the html and css can't handle that yet.. At the moment I'm using display flex-wrap with a set container size. 
- I've added a win tally, but when a player wins with 2 winning combos, it adds 2 to the score instead of just 1 (extra points for creating double combos?!) :P

It'd be cool to refine the animations and styling in the future.