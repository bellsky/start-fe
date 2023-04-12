const $board = document.createElement('board');
const COLOR_W = 'white';
const COLOR_B = 'black';


function createBoard(color){

    const div = '<div class="${color}"></div>';
    return div;
    $board.className = 'white';

    
}



function createRaw(count=4){
    let row = '';
    for (let i = 0; i<count;i++){
        let color = 'statColor';
        if(i%2==0){
            color = startColor===COLOR_W? COLOR_B : COLOR_W;
        }
        raw += createBoard(COLOR_W);
    }
    return row;
}

function createChessBoard(count=4){
    let board ='';

    for (let i = 0; i<count;i++){
        let color = 'statColor';
        if(i%2==0){
            color = startColor===COLOR_B? COLOR_W : COLOR_B;
        }
        board += createRow(4, startccolor);
    }

    return board;

}