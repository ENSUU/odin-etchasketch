// Creating the initial 16 x 16 grid
const gridContainer = document.querySelector('.container');
gridContainer.style.cssText = `margin: 21px auto; width: 960px; display: flex; flex-wrap: wrap; justify-content: center;`;

for (let i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div'); 
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'skyblue';
    })
    gridSquare.style.cssText = `width: 200px; height: 200px; border: 1px solid black;`; 
    gridContainer.appendChild(gridSquare); 
}

// When the user clicks the button, ask for a number, and replace original grid with n x n grid.
const generateButton = document.querySelector('button'); 

generateButton.addEventListener('click', () => {
    // Grabbing user inputted number, n, to create n x n grid.
    let userNum = parseInt(prompt("Enter n to create a n x n grid: ")); 

    // Input validation; Limit n to be less than or equal to 100. 
    while (userNum > 100) {
        userNum = parseInt(prompt("n should not be greater than 100. Enter another value for n: "));
    }

    // Selecting the container HTML element and styling it. 
    const gridContainer = document.querySelector('.container');
    gridContainer.innerHTML = "";

    gridContainer.style.cssText = `margin: 21px auto; width: 960px; display: flex; flex-wrap: wrap; justify-content: center;`;

    // Creating n x n grid
    for (let i = 0; i < userNum * userNum; i++) {
        const gridSquare = document.createElement('div'); 
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'skyblue';
        })
        gridSquare.style.cssText = `width: ${(960/userNum) - 2}px; height: ${(960/userNum) - 2}px; border: 1px solid black;`; 
        gridContainer.appendChild(gridSquare); 
    }
})

