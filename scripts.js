// Grabbing user inputted number, n, to create n x n grid.
let userNum = parseInt(prompt("Enter n to create a n x n grid: ")); 

// Input validation; Limit n to be less than or equal to 100. 
while (userNum > 100) {
    userNum = parseInt(prompt("n should not be greater than 100. Enter another value for n: "));
}

// If n = 10, then the grid container should have a width of (200 * 10) + (2 * 10)
// Each grid square should 

// Selecting the container HTML element and styling it. 
const gridContainer = document.querySelector('.container');
gridContainer.style.cssText = `margin: 0 auto; width: ${800 + (2 * userNum)}px; display: flex; flex-wrap: wrap;`

// Creating the 16 x 16 grid
for (let i = 0; i < userNum * userNum; i++) {
    const gridSquare = document.createElement('div'); 
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'skyblue';
    })
    gridSquare.style.cssText = `width: ${800/userNum}px; height: ${800/userNum}px; border: 1px solid black;`; 
    gridContainer.appendChild(gridSquare); 
}

