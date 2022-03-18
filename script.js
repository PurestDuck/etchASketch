const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const INITIAL_GRID = 16;
const MAX_AMOUNT = 40;
const MIN_AMOUNT = 1;
let isRainbowPen = false;


rainbowBtn.addEventListener('click', changePenRaibow);
blackBtn.addEventListener('click', changePenBlack);
clearBtn.addEventListener('click', clearTiles);

function changePenRaibow(){
    isRainbowPen = true;
}

function changePenBlack(){
    isRainbowPen = false;
}
function checkIfBlack(color){
    if(color < 0) return 0;
    return color;
}
function drawRainbow(e){
    if(!e.target.style.background){
        e.target.style.background = createRandomRGB();
    }else{
        let currentColor = e.target.style.background;
        currentColor = currentColor.substring(4, currentColor.length-1)
         .replace(/ /g, '')
         .split(',');
        let newRed = parseInt(currentColor[0]) - 10;
        let newGreen = parseInt(currentColor[1])- 10;
        let newBlue = parseInt(currentColor[2]) - 10;
        newRed = checkIfBlack(newRed);
        newGreen = checkIfBlack(newGreen);
        newBlue = checkIfBlack(newBlue);
        e.target.style.background = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
    }
}
function createRandomRGB(){
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})` ;
}
function drawOnTile(e) {
    if(isRainbowPen){
        drawRainbow(e);
    } else{
        e.target.style.background = `black`;
    }
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