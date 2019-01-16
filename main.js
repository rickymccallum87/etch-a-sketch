const container = document.querySelector('#container');
const resetButton = document.querySelector('button');
let sketchpad = [];
let index = 0;
let tilesPerSide;
let containerSize = 800; 

createGrid();

// New grid
resetButton.addEventListener('click', () => {
    clearGrid();
    tilesPerSide = prompt('How many squares per side?');
    createGrid(tilesPerSide);
});

// Destroy grid
function clearGrid() {
    for (let i = 0; i < sketchpad.length; i++) {
        container.removeChild(sketchpad[i]);
    }
}

// Create grid
function createGrid(tilesPerSide = 16) {
    for (let i = 0; i < tilesPerSide; i++) {
        for (let j = 0; j < tilesPerSide; j++) {
            index = i * tilesPerSide + j;

            sketchpad[index] = document.createElement('div');
            sketchpad[index].classList.add('tile');
            sketchpad[index].style.width = containerSize / tilesPerSide + 'px';
            sketchpad[index].style.height = containerSize / tilesPerSide + 'px';

            container.appendChild(sketchpad[index]);

            if (index % tilesPerSide === 0) {
                sketchpad[index].classList.add('clear');
            }
        }
    }

    // Draw on hover
    for (let i = 0; i < sketchpad.length; i++) {
        sketchpad[i].addEventListener('mouseover', (e) => {
            e.target.classList.add('color');
        });
    }
}
