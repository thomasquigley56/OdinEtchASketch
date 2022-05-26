const container = document.querySelector('.container');
const vert = [];
const horiz = [];

for(let i = 0; i < 16; i++){
    vert[i] = document.createElement('div');
    vert[i].classList.add('vert');
    horiz[i] = [];
    for(let j = 0; j < 16; j++){
        horiz[i][j] = document.createElement('div'); 
        horiz[i][j].classList.add('horiz');
        vert[i].appendChild(horiz[i][j]);
    }
    container.appendChild(vert[i]);
}