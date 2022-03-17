const container = document.querySelector('#container');
const INITIAL_GRID = 16;

for (let r = 0; r < INITIAL_GRID; r++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.setAttribute('id',`${r+1}`);
    for (let c = 0; c < INITIAL_GRID; c++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'colorTile');
        row.appendChild(div);
    }
}   






