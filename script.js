const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const INITIAL_GRID = 16;
const MAX_AMOUNT = 40;
const MIN_AMOUNT = 1;
let red = 0, blue = 0, green = 0;

rainbowBtn.addEventListener('click', changePenRaibow);
blackBtn.addEventListener('click', changePenBlack);
clearBtn.addEventListener('click', clearTiles);

function changePenRaibow(){
    red=10;
    green+=5;
    blue+=40;
}

function changePenBlack(){
    red=0;
    green=0;
    blue=0;
}

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
    e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
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
    let rowAndCol = parseInt(prompt("Enter grid desired"));
    while(!(rowAndCol >= MIN_AMOUNT && rowAndCol <= MAX_AMOUNT)){
        rowAndCol = parseInt(prompt(`Min has to be ${MIN_AMOUNT}, max ${MAX_AMOUNT}`));
    }
    setupTiles(rowAndCol, rowAndCol);
}

setupTiles(INITIAL_GRID, INITIAL_GRID);