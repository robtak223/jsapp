/*
import { Piece, King, Queen, Bishop, Knight, Rook, Pawn } from "./piece.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    autoCenter: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // Load images of the board and pieces
    this.load.image('wq', '/images/triv_img/wQ.png');
    this.load.image('bq', '/images/triv_img/bQ.png');
    this.load.image('bk', '/images/triv_img/bK.png');
    this.load.image('wk', '/images/triv_img/wK.png');
    this.load.image('wn', '/images/triv_img/wN.png');
    this.load.image('bn', '/images/triv_img/bN.png');
    this.load.image('bb', '/images/triv_img/bB.png');
    this.load.image('wb', '/images/triv_img/wB.png');
    this.load.image('wr', '/images/triv_img/wR.png');
    this.load.image('br', '/images/triv_img/bR.png');
    this.load.image('bp', '/images/triv_img/bP.png');
    this.load.image('wp', '/images/triv_img/wP.png');
    this.load.image('spot', '/images/triv_img/spot2.png');
    this.load.image('board', '/images/triv_img/board.png');
    this.load.image('but', '/images/triv_img/but.png');
    this.moved = [];
}
// TODO: move these to class variables
var board;
var selected;
var select_pos;
var thing;
var turn;
var spots = [];
var spot_scale = 0.3;
var rand = true;

// Takes in 2D array board and sets positons of piece sprites based on object locations
function setBoard(board) {

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(board[i][j] != '') {
                board[i][j].sprite.x = i*100 + 50;
                board[i][j].sprite.y = j*100 + 50;
            }
        }
    }
}

/*
var but1;
var but2;
var text1;
var text2;
but1 = this.add.sprite(200, 400, 'but').setInteractive().setScale(0.4);
    but2 = this.add.sprite(600, 400, 'but').setInteractive().setScale(0.4);
    text1 = this.add.text(110, 385, 'Random Agent', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '25px', color: 'black', fontStyle: 'bold'});
    text1 = this.add.text(530, 385, 'vs. Human', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '25px', color: 'black', fontStyle: 'bold'});
    


function agentMove(board) {

    let all_moves = [];
    let moves;
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                if(board[i][j] && board[i][j].team == 'b') {
                    moves = board[i][j].moves(board);
                    for(let k = 0; k < moves.length; k++) {
                        all_moves.push([[i,j], moves[k]]);
                    }
                }
            }
        }
        console.log(all_moves.length);
        let index = Math.floor(Math.random() * all_moves.length);
        let a = all_moves[index][0][0];
        let b = all_moves[index][0][1];
        let x = all_moves[index][1][0];
        let y = all_moves[index][1][1];

        if(board[x][y]) {
            board[x][y].sprite.destroy();
        }
        if(board[a][b].type == 'k' && Math.abs(a-x) >= 2) {
            if(x == 6) {
                board[5][y] = board[7][y];
                board[5][y].pos = [5, y];
                board[5][y].hasMoved = true;
                board[7][y] = '';
            } else if(x == 2) {
                board[3][y] = board[0][y];
                board[3][y].pos = [3, y];
                board[3][y].hasMoved = true;
                board[0][y] = '';
            }
        }
        board[a][b].pos = [x,y];
        board[a][b].hasMoved = true;
        board[x][y] = board[a][b];
        board[a][b] = '';
        if(turn =='w') {
            turn = 'b';
        } else {
            turn = 'w';
        }
        setBoard(board);
}

function create ()
{
    turn = 'w';
    selected = false
    thing = this;
    let boardIm = this.add.image(401, 400, 'board');
    boardIm.setScale(0.75);
    board = [];
    // Create the board
    for(let i = 0; i < 8; i++) {
        var newd = [];
        for(let j = 0; j < 8; j++) {
            newd.push('');
        }
        board.push(newd);
    }
    // For each piece, add the sprite and set its starting location in the 2D array
    var wq = this.add.sprite(50, 50, 'wq').setInteractive().setScale(0.565);
    board[3][7] = new Queen('w', [3,7], wq);
    var bq = this.add.sprite(50, 50, 'bq').setInteractive().setScale(0.565);
    board[3][0] = new Queen('b', [3,0], bq)
    var wk = this.add.sprite(50, 50, 'wk').setInteractive().setScale(0.565);
    board[4][7] = new King('w', [4,7], wk);
    var bk = this.add.sprite(50, 50, 'bk').setInteractive().setScale(0.565);
    board[4][0] = new King('b', [4,0], bk);
    var wb1 = this.add.sprite(50, 50, 'wb').setInteractive().setScale(0.565);
    board[5][7] = new Bishop('w', [5,7], wb1);
    var bb1 = this.add.sprite(50, 50, 'bb').setInteractive().setScale(0.565);
    board[5][0] = new Bishop('b', [5,0], bb1);
    var wb2 = this.add.sprite(50, 50, 'wb').setInteractive().setScale(0.565);
    board[2][7] = new Bishop('w', [2,7], wb2);
    var bb2 = this.add.sprite(50, 50, 'bb').setInteractive().setScale(0.565);
    board[2][0] = new Bishop('b', [2,0], bb2);
    var wr1 = this.add.sprite(50, 50, 'wr').setInteractive().setScale(0.565);
    board[7][7] = new Rook('w', [7,7], wr1);
    var br1 = this.add.sprite(50, 50, 'br').setInteractive().setScale(0.565);
    board[7][0] = new Rook('b', [7,0], br1);
    var wr2 = this.add.sprite(50, 50, 'wr').setInteractive().setScale(0.565);
    board[0][7] = new Rook('w', [0,7], wr2);
    var br2 = this.add.sprite(50, 50, 'br').setInteractive().setScale(0.565);
    board[0][0] = new Rook('b', [0,0], br2);
    var wn1 = this.add.sprite(50, 50, 'wn').setInteractive().setScale(0.565);
    board[1][7] = new Knight('w', [1,7], wn1);
    var bn1 = this.add.sprite(50, 50, 'bn').setInteractive().setScale(0.565);
    board[1][0] = new Knight('b', [1,0], bn1);
    var wn2 = this.add.sprite(50, 50, 'wn').setInteractive().setScale(0.565);
    board[6][7] = new Knight('w', [6,7], wn2);
    var bn2 = this.add.sprite(50, 50, 'bn').setInteractive().setScale(0.565);
    board[6][0] = new Knight('b', [6,0], bn2);

    // Do the same for the pawns
    for(let i = 0; i < 8; i++) {
        var wp1 = this.add.sprite(50, 50, 'wp').setInteractive().setScale(0.565);
        board[i][6] = new Pawn('w', [i,6], wp1);
        var bp1 = this.add.sprite(50, 50, 'bp').setInteractive().setScale(0.565);
        board[i][1] = new Pawn('b', [i,1], bp1);
    }

    // Main mouse input function
    this.input.on('pointerup', function(pointer) {
        // Find which square was clicked on
        let x = Math.floor(pointer.x / 100);
        let y = Math.floor(pointer.y / 100);
        let obj = board[x][y];
        let match = false;

        // if a piece was already selected (and is thus moving)
        if(selected) {
            // find if we clicked to an actual move for the piece
            for(let i in spots) {
                let spot = spots[i]
                if(x == spot[1] && y == spot[2]) {
                    match = true;
                    break;
                }
            }
            // if we successfully clicked on a real move
            if(match) {
                let a = select_pos[0];
                let b = select_pos[1];
                // if we capture a piece, destroy it
                if(board[x][y]) {
                    board[x][y].sprite.destroy();
                }
                // This part deals with castling
                if(board[a][b].type == 'k' && Math.abs(a-x) >= 2) {
                    if(x == 6) {
                        board[5][y] = board[7][y];
                        board[5][y].pos = [5, y];
                        board[5][y].hasMoved = true;
                        board[7][y] = '';
                    } else if(x == 2) {
                        board[3][y] = board[0][y];
                        board[3][y].pos = [3, y];
                        board[3][y].hasMoved = true;
                        board[0][y] = '';
                    }
                }
                thing.moved.push([board[a][b].type, [a,b], [x,y]]);
                // Set the new position of the piece, change whose turn it is
                board[a][b].pos = [x,y];
                board[a][b].hasMoved = true;
                board[x][y] = board[a][b];
                board[a][b] = '';
                if(turn =='w') {
                    turn = 'b';
                } else {
                    turn = 'w';
                }
                // Reset sprite positions after a move
                setBoard(board);
                if(rand) {
                agentMove(board);
                }

            }
            // get rid of spots which indicated potential moves
            for(let i in spots) {
                spots[i][0].destroy();
            }
            spots.length = 0;
            selected=false;
            console.log(thing.moved);
        } else {
            // if no piece is selected
            if(spots) {
                for(let i in spots) {
                    spots[i][0].destroy();
                }
                spots.length = 0;
            }
            // if we clicked on an empty square or if we tried to move a piece off-turn
            if(!obj || obj.team != turn) {
                return;
            }
            selected = true;
            select_pos = [x,y];
            let moves = obj.moves(board);
            // add spots to each potential move spot
            for(let i in moves) {
                let move = moves[i];
                x = move[0]*100 + 50;
                y = move[1]*100 + 50;
                spots.push([thing.add.sprite(x, y, 'spot'), move[0], move[1]]);
                spots[spots.length-1][0].setScale(spot_scale);
            }
        }
    });
    
    setBoard(board);

}


function update ()
{

}
*/

import { Chess } from "./chess.js/dist/chess.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    autoCenter: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // Load images of the board and pieces
    this.load.image('wq', '/images/triv_img/wQ.png');
    this.load.image('bq', '/images/triv_img/bQ.png');
    this.load.image('bk', '/images/triv_img/bK.png');
    this.load.image('wk', '/images/triv_img/wK.png');
    this.load.image('wn', '/images/triv_img/wN.png');
    this.load.image('bn', '/images/triv_img/bN.png');
    this.load.image('bb', '/images/triv_img/bB.png');
    this.load.image('wb', '/images/triv_img/wB.png');
    this.load.image('wr', '/images/triv_img/wR.png');
    this.load.image('br', '/images/triv_img/bR.png');
    this.load.image('bp', '/images/triv_img/bP.png');
    this.load.image('wp', '/images/triv_img/wP.png');
    this.load.image('spot', '/images/triv_img/spot2.png');
    this.load.image('board', '/images/triv_img/board.png');
    this.load.image('but', '/images/triv_img/but.png');
    this.moved = [];
}
// TODO: move these to class variables
var board;
var selected;
var select_pos;
var thing;
var turn;
var pieces = [];
var spots = [];
var spot_scale = 0.3;
var rand = true;
var chess;
var position_map = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d", 
    5 : "e",
    6 : "f",
    7 : "g",
    8 : "h"
};
var rev_position_map = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4, 
    "e" : 5,
    "f" : 6,
    "g" : 7,
    "h" : 8
};


// Takes in 2D array board and sets positons of piece sprites based on object locations
function setBoard(board) {

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(board[i][j] != '') {
                board[i][j].sprite.x = i*100 + 50;
                board[i][j].sprite.y = j*100 + 50;
            }
        }
    }
}


function create ()
{
    chess = new Chess()

    turn = 'w';
    selected = false
    thing = this;
    let boardIm = this.add.image(401, 400, 'board');
    boardIm.setScale(0.75);
    // For each piece, add the sprite and set its starting location in the 2D array
    var wq = this.add.sprite(350, 750, 'wq').setInteractive().setScale(0.565);
    pieces.push(wq);
    var bq = this.add.sprite(350, 50, 'bq').setInteractive().setScale(0.565);
    pieces.push(bq);
    var wk = this.add.sprite(450, 750, 'wk').setInteractive().setScale(0.565);
    pieces.push(wk);
    var bk = this.add.sprite(450, 50, 'bk').setInteractive().setScale(0.565);
    pieces.push(bk);
    var wb1 = this.add.sprite(250, 750, 'wb').setInteractive().setScale(0.565);
    pieces.push(wb1);
    var bb1 = this.add.sprite(250, 50, 'bb').setInteractive().setScale(0.565);
    pieces.push(bb1);
    var wb2 = this.add.sprite(550, 750, 'wb').setInteractive().setScale(0.565);
    pieces.push(wb2);
    var bb2 = this.add.sprite(550, 50, 'bb').setInteractive().setScale(0.565);
    pieces.push(bb2);
    var wr1 = this.add.sprite(50, 750, 'wr').setInteractive().setScale(0.565);
    pieces.push(wr1);
    var br1 = this.add.sprite(50, 50, 'br').setInteractive().setScale(0.565);
    pieces.push(br1);
    var wr2 = this.add.sprite(750, 750, 'wr').setInteractive().setScale(0.565);
    pieces.push(wr2);
    var br2 = this.add.sprite(750, 50, 'br').setInteractive().setScale(0.565);
    pieces.push(br2);
    var wn1 = this.add.sprite(150, 750, 'wn').setInteractive().setScale(0.565);
    pieces.push(wn1);
    var bn1 = this.add.sprite(150, 50, 'bn').setInteractive().setScale(0.565);
    pieces.push(bn1);
    var wn2 = this.add.sprite(650, 750, 'wn').setInteractive().setScale(0.565);
    pieces.push(wn2);
    var bn2 = this.add.sprite(650, 50, 'bn').setInteractive().setScale(0.565);
    pieces.push(bn2);

    for(let i = 0; i < 8; i++) {
        var wp1 = this.add.sprite((i*100)+50, 650, 'wp').setInteractive().setScale(0.565);
        pieces.push(wp1);
        var bp1 = this.add.sprite((i*100)+50, 150, 'bp').setInteractive().setScale(0.565);
        pieces.push(bp1);
    }

    // Main mouse input function
    this.input.on('pointerup', function(pointer) {
        // Find which square was clicked on
        let x = Math.floor(pointer.x / 100);
        let y = Math.floor(pointer.y / 100);
        let squared = position_map[x+1] + (8-y).toString(); 
        let obj = chess.get(squared);
        let match = false;
        // if a piece was already selected (and is thus moving)
        if(selected) {
            console.log("selecteed");
            // find if we clicked to an actual move for the piece
            for(let i in spots) {
                let spot = spots[i]
                if(x == spot[1]-1 && y == 8-spot[2]) {
                    match = true;
                    break;
                }
            }
            // if we successfully clicked on a real move
            if(match) {
                console.log("match");
                let newde = select_pos + squared
                chess.move(newde)

                if(turn =='w') {
                    turn = 'b';
                } else {
                    turn = 'w';
                }
                var pzsd = select_pos[0];
                pzsd = rev_position_map[pzsd];
                let pwed = parseInt(select_pos[1]);

                x = (pzsd-1)*100 + 50;
                y = (8-pwed)*100 + 50;
                var pzsd2 = squared[0];
                pzsd2 = rev_position_map[pzsd2];
                let pwed2 = parseInt(squared[1]);

                let x2 = (pzsd2-1)*100 + 50;
                let y2 = (8-pwed2)*100 + 50;
                console.log(x, y);
                console.log(x2, y2);
                for(let piece in pieces) {
                    console.log(piece.x, piece.y)
                    if(piece.x == x2 && piece.y == y2) {
                        piece.destroy();
                    }
                    if(piece.x == x && piece.y == y) {
                        piece.x = x2;
                        piece.y = y2;
                    }
                }

            }
            // get rid of spots which indicated potential moves
            for(let i in spots) {
                spots[i][0].destroy();
            }
            spots.length = 0;
            selected=false;
        } else {
            console.log("no select");
            // if no piece is selected
            if(spots) {
                for(let i in spots) {
                    spots[i][0].destroy();
                }
                spots.length = 0;
            }
            // if we clicked on an empty square or if we tried to move a piece off-turn
            if(!obj || obj.color != turn) {
                return;
            }
            selected = true;
            select_pos = squared;
            let moves = chess.moves({square: squared});
            for(let i in moves) {
                let move = moves[i];
                var pzsd = move[0];
                pzsd = rev_position_map[pzsd];
                let pwed = parseInt(move[1]);
                x = (pzsd-1)*100 + 50;
                y = (8-pwed)*100 + 50;
                spots.push([thing.add.sprite(x, y, 'spot'), pzsd, pwed]);
                spots[spots.length-1][0].setScale(spot_scale);
            }
        }
    });
    

}


function update ()
{

}
