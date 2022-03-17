const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const INITIAL_GRID = 16;

clearBtn.addEventListener('click', clearTiles);

function makeTiles(rowNum, columnNum) {
    for (let r = 0; r < rowNum; r++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('class', `row`);
        for (let c = 0; c < columnNum; c++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'colorTile');
            row.appendChild(div);
        }
    }

}
function setupTiles(row, col) {
    makeTiles(row, col);
    const allTiles = document.querySelectorAll('.colorTile');
    allTiles.forEach((tile) => {
        tile.addEventListener('mouseover', drawOnTile);
    })

}

function drawOnTile(e) {
    e.target.style.background = "black";
}
function removeTiles(){
    const rows = document.querySelectorAll('.row');
    const childTiles = document.querySelectorAll('.colorTile');
    if(!rows) return;
    for(const row of rows){
        container.removeChild(row);
    }


    
}

function clearTiles() {
    removeTiles();
    const rowAndCol = parseInt(prompt("Enter grid desired"));
    setupTiles(rowAndCol, rowAndCol);
}

setupTiles(INITIAL_GRID, INITIAL_GRID);