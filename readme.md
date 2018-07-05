**Tic Tac Rawr**

*Attempt 1. Day 1 and 2.*
I started off with the html structure, and then adding the javascript and css as I go. 
I used divs and IDs to identify each box and manually coded all the winning possibilities for the win check.
It's working ok.  

*Attempt 2. Day 3.*
There has to be a better way.. so for this attempt I tried focusing on making it work first using arrays in javascript, and using a code that's more scalable / adaptable (eg. for a bigger board). Instead of listing all the winning possibilities, I created functions to check for rows, columns, and the two diagonal win combos. 

You can find the game here:
https://cset00.github.io/tic-tac-rawr/


Unresolved yet:
- Responsiveness. I'd probably have a set size for bigger screens, and adaptable size for smaller screens..
- While the javascript could handle a bigger board (eg. 5x5 instead of 3x3), the html and css can't handle that yet.. At the moment I'm using display flex-wrap with a set container size. 