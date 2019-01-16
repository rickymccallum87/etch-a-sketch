const container = document.querySelector('#container');
const resetButton = document.querySelector('button');
let sketchpad = [];
let index = 0;
let length;

createGrid();

function clearGrid() {
    for (let i = 0; i < sketchpad.length; i++) {
        container.removeChild(sketchpad[i]);
    }
}

resetButton.addEventListener('click', () => {
    clearGrid();
    length = prompt('How many squares per side?');
    createGrid(length);
});

// Create grid
function createGrid(length = 16) {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            index = i * length + j;
            sketchpad[index] = document.createElement('div');
            sketchpad[index].classList.add('tile');
            container.appendChild(sketchpad[index]);

            if (index % 16 === 0) {
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
