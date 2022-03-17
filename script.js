const container = document.querySelector('#container');
const INITIAL_GRID = 16;
function makeTiles(rowNum, columnNum) {
    for (let r = 0; r < rowNum; r++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('id', `${r + 1}`);
        for (let c = 0; c < columnNum; c++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'colorTile');
            row.appendChild(div);
        }
    }
}
function setupTiles(){
    makeTiles(INITIAL_GRID, INITIAL_GRID);
    const allTiles = document.querySelectorAll('.colorTile');
    allTiles.forEach( (tile)=>{
        tile.addEventListener('mouseover',drawOnTile);
    })
}
function drawOnTile(e){
    e.target.style.background= "black";
}
setupTiles();





