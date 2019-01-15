const container = document.querySelector('#container');
let sketchpad = [];
for (let i = 0; i < 16; i++) {
    sketchpad[i] = document.createElement('div');
    sketchpad[i].classList.add('tile');
    container.appendChild(sketchpad[i]);
}