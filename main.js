
function generateGrid(dimension){
    const clear = document.querySelector('.grid');
    if (clear){
        clear.parentNode.removeChild(clear);
    }
    
    const body = document.querySelector('body');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    body.appendChild(grid);

    for (x = 0; x < dimension; x++){
        const div = document.createElement('div');
        div.classList.add('row');
        grid.appendChild(div);
        
        const row = document.querySelectorAll('.row');
        for (y = 0; y < dimension; y++){
            const square = document.createElement('div');
            square.classList.add('square');
            row[x].appendChild(square);
        }
    }

    const squareClass = document.querySelectorAll('.square');

    squareClass.forEach((square) => {

        // and for each one we add a 'click' listener
        square.addEventListener('mouseover', () => {
            square.classList.add('coloredIn');
            const colorChange = document.getElementById("colorChange").checked;
            square.setAttribute('style', 'background: black;');
            if (colorChange){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                square.setAttribute('style', `background: #${randomColor};`);
            }
        });
    });
}

function changeGrid(){
   let gridSize = prompt("How many squares?");
   if (gridSize > 100){
       gridSize = 100;
   }else if (gridSize < 0){
       gridSize = 1;
   }
   generateGrid(gridSize);
 }