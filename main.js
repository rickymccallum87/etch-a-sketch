const container = document.querySelector('#container');
let sketchpad = [];
let index = 0;

// Create grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        index = i * 16 + j;
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