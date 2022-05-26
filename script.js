const container = document.querySelector('.container');
let vert = [];
let horiz = [];

for(let i = 0; i < 16; i++){
    vert[i] = document.createElement('div');
    vert[i].classList.add('vert');
    horiz[i] = [];
    for(let j = 0; j < 16; j++){
        horiz[i][j] = document.createElement('div'); 
        horiz[i][j].classList.add('horiz');
        horiz[i][j].addEventListener('mouseover', function(){
            horiz[i][j].classList.add("colored");
        });
        vert[i].appendChild(horiz[i][j]);
    }
    container.appendChild(vert[i]);
}

const sizeBtn = document.querySelector('.sizeBtn');
sizeBtn.addEventListener('click', function(){
    let size = prompt("How many squares wide would you like your grid?");
    clearContainer();
    newGrid(size);
});

function newGrid(size){
    vert = [];
    horiz = [];
    for(let i = 0; i < size; i++){
        vert[i] = document.createElement('div');
        vert[i].classList.add('vert');
        horiz[i] = [];
        for(let j = 0; j < size; j++){
            horiz[i][j] = document.createElement('div'); 
            horiz[i][j].classList.add('horiz');
            horiz[i][j].addEventListener('mouseover', function(){
                horiz[i][j].classList.add("colored");
            });
            vert[i].appendChild(horiz[i][j]);
        }
        container.appendChild(vert[i]);
    }
}

function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}