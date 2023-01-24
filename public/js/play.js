
class Piece {
    constructor(team, type, pos, sprite) {
        this.team = team;
        this.type = type;
        this.pos = pos;
        this.sprite = sprite;
        this.hasMoved = false;
        this.dirs = [
            [1,0],
            [1,1],
            [0,1],
            [-1,1],
            [-1,0],
            [-1,-1],
            [0,-1],
            [1,-1],
        ]
        this.knight_moves = [
            [2,1],
            [2,-1],
            [1,2],
            [-1,2],
            [-2,1],
            [-2,-1],
            [-1,-2],
            [1,-2],
        ]
    }

    onBoard(pos) {
        return pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7;
    }
}

class Queen extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'q', pos, sprite);
    }

    moves(board) {
        var ret = [];
        for(let i = 0; i < 8; i++) {
            let x = this.pos[0];
            let y = this.pos[1];
            for(let j = 0; j < 8; j++) {
                x+=this.dirs[i][0];
                y+= this.dirs[i][1];
                if(this.onBoard([x,y])) {
                    if(!board[x][y]) {
                        ret.push([x,y]);
                    }
                    else if(board[x][y] && board[x][y].team != this.team) {
                        ret.push([x,y]);
                        break;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        return ret;
    }

}

class King extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'k', pos, sprite);
    }

    moves(board) {
        var ret = [];
        for(let i = 0; i < 8; i++) {
            let x = this.pos[0];
            let y = this.pos[1];
            x+=this.dirs[i][0];
            y+= this.dirs[i][1];
            if(this.onBoard([x,y])) {
                if(!board[x][y]) {
                    ret.push([x,y]);
                }
                else if(board[x][y] && board[x][y].team != this.team) {
                    ret.push([x,y]);
                }
            }
        }
        let c = this.pos[1];
        if(!this.hasMoved && board[0][c] && !(board[0][c].hasMoved) && !board[1][c] && !board[2][c] && !board[3][c]) {
            ret.push([2, c]);
        }
        if(!this.hasMoved && board[7][c] && !(board[7][c].hasMoved) && !board[6][c] && !board[5][c]) {
            ret.push([6, c]);
        }
        return ret;
    }

}

class Bishop extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'b', pos, sprite);
    }

    moves(board) {
        var ret = [];
        for(let i = 1; i < 8; i+=2) {
            let x = this.pos[0];
            let y = this.pos[1];
            for(let j = 0; j < 8; j++) {
                x+=this.dirs[i][0];
                y+= this.dirs[i][1];
                if(this.onBoard([x,y])) {
                    if(!board[x][y]) {
                        ret.push([x,y]);
                    }
                    else if(board[x][y] && board[x][y].team != this.team) {
                        ret.push([x,y]);
                        break;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        return ret;
    }

}

class Rook extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'r', pos, sprite);
    }

    moves(board) {
        var ret = [];
        for(let i = 0; i < 8; i+=2) {
            let x = this.pos[0];
            let y = this.pos[1];
            for(let j = 0; j < 8; j++) {
                x+=this.dirs[i][0];
                y+= this.dirs[i][1];
                if(this.onBoard([x,y])) {
                    if(!board[x][y]) {
                        ret.push([x,y]);
                    }
                    else if(board[x][y] && board[x][y].team != this.team) {
                        ret.push([x,y]);
                        break;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        return ret;
    }

}

class Knight extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'n', pos, sprite);
    }

    moves(board) {
        var ret = [];
        for(let i = 0; i < 8; i++) {
            let x = this.pos[0];
            let y = this.pos[1];
            x+=this.knight_moves[i][0];
            y+= this.knight_moves[i][1];
            if(this.onBoard([x,y])) {
                if(!board[x][y]) {
                    ret.push([x,y]);
                }
                else if(board[x][y] && board[x][y].team != this.team) {
                    ret.push([x,y]);
                }
            }
        }
        return ret;
    }

}

class Pawn extends Piece {
    constructor(team, pos, sprite) {
        super(team, 'p', pos, sprite);
    }

    moves(board) {
        var ret = [];
        let team_mult = 1;
        let start_rank = 1;
        if(this.team == 'w') {
            team_mult = -1;
            start_rank = 6;
        }
        let pawn_moves = [[1,1], [0,1], [-1,1]];
        let x = this.pos[0];
        let y = this.pos[1];
        if(this.onBoard([x,y + team_mult]) && !board[x][y + team_mult]) {
            ret.push([x,y+team_mult]);
        }
        if(this.onBoard([x+1,y + team_mult]) && board[x+1][y+team_mult] && board[x+1][y+team_mult].team != this.team) {
            ret.push([x+1,y+team_mult]);
        }
        if(this.onBoard([x-1,y + team_mult]) && board[x-1][y+team_mult] && board[x-1][y+team_mult].team != this.team) {
            ret.push([x-1,y+team_mult]);
        }
        if(this.pos[1] == start_rank && !board[x][y + team_mult] && !board[x][y + team_mult + team_mult]) {
            ret.push([x, y+ team_mult + team_mult]);
        }
        return ret;
    }

}

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
}

var wq;
var wk;
var wn1;
var wn2;
var wb1;
var wb2;
var wr1;
var wr2;
var wp1;
var wp2;
var wp3;
var wp4;
var wp5;
var wp6;
var wp7;
var wp8;
var bq;
var bk;
var bn1;
var bn2;
var bb1;
var bb2;
var br1;
var br2;
var bp1;
var bp2;
var bp3;
var bp4;
var bp5;
var bp6;
var bp7;
var bp8;
var board;
var selected;
var select_pos;
var thing;
var turn;
var spots = [];
var spot_scale = 0.3;

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
    turn = 'w';
    selected = false
    thing = this;
    let boardIm = this.add.image(401, 400, 'board');
    boardIm.setScale(0.75);
    board = [];
    for(let i = 0; i < 8; i++) {
        var newd = [];
        for(let j = 0; j < 8; j++) {
            newd.push('');
        }
        board.push(newd);
    }
    wq = this.add.sprite(50, 50, 'wq').setInteractive();
    wq.setScale(0.565);
    board[3][7] = new Queen('w', [3,7], wq);
    bq = this.add.sprite(50, 50, 'bq').setInteractive();
    bq.setScale(0.565);
    board[3][0] = new Queen('b', [3,0], bq)
    wk = this.add.sprite(50, 50, 'wk').setInteractive();
    wk.setScale(0.565);
    board[4][7] = new King('w', [4,7], wk);
    bk = this.add.sprite(50, 50, 'bk').setInteractive();
    bk.setScale(0.565);
    board[4][0] = new King('b', [4,0], bk);
    wb1 = this.add.sprite(50, 50, 'wb').setInteractive();
    wb1.setScale(0.565);
    board[5][7] = new Bishop('w', [5,7], wb1);
    bb1 = this.add.sprite(50, 50, 'bb').setInteractive();
    bb1.setScale(0.565);
    board[5][0] = new Bishop('b', [5,0], bb1);
    wb2 = this.add.sprite(50, 50, 'wb').setInteractive();
    wb2.setScale(0.565);
    board[2][7] = new Bishop('w', [2,7], wb2);
    bb2 = this.add.sprite(50, 50, 'bb').setInteractive();
    bb2.setScale(0.565);
    board[2][0] = new Bishop('b', [2,0], bb2);
    wr1 = this.add.sprite(50, 50, 'wr').setInteractive();
    wr1.setScale(0.565);
    board[7][7] = new Rook('w', [7,7], wr1);
    br1 = this.add.sprite(50, 50, 'br').setInteractive();
    br1.setScale(0.565);
    board[7][0] = new Rook('b', [7,0], br1);
    wr2 = this.add.sprite(50, 50, 'wr').setInteractive();
    wr2.setScale(0.565);
    board[0][7] = new Rook('w', [0,7], wr2);
    br2 = this.add.sprite(50, 50, 'br').setInteractive();
    br2.setScale(0.565);
    board[0][0] = new Rook('b', [0,0], br2);
    wn1 = this.add.sprite(50, 50, 'wn').setInteractive();
    wn1.setScale(0.565);
    board[1][7] = new Knight('w', [1,7], wn1);
    bn1 = this.add.sprite(50, 50, 'bn').setInteractive();
    bn1.setScale(0.565);
    board[1][0] = new Knight('b', [1,0], bn1);
    wn2 = this.add.sprite(50, 50, 'wn').setInteractive();
    wn2.setScale(0.565);
    board[6][7] = new Knight('w', [6,7], wn2);
    bn2 = this.add.sprite(50, 50, 'bn').setInteractive();
    bn2.setScale(0.565);
    board[6][0] = new Knight('b', [6,0], bn2);

    for(let i = 0; i < 8; i++) {
        wp1 = this.add.sprite(50, 50, 'wp').setInteractive();
        wp1.setScale(0.565);
        board[i][6] = new Pawn('w', [i,6], wp1);
        bp1 = this.add.sprite(50, 50, 'bp').setInteractive();
        bp1.setScale(0.565);
        board[i][1] = new Pawn('b', [i,1], bp1);
    }

    this.input.on('pointerup', function(pointer) {
        let x = Math.floor(pointer.x / 100);
        let y = Math.floor(pointer.y / 100);
        let obj = board[x][y];
        let match = false;
        if(selected) {
            for(let i in spots) {
                let spot = spots[i]
                if(x == spot[1] && y == spot[2]) {
                    match = true;
                    break;
                }
            }
            if(match) {
                let a = select_pos[0];
                let b = select_pos[1];
                if(board[x][y]) {
                    board[x][y].sprite.destroy();
                }
                console.log(board[a][b].type, Math.abs(a-x));
                if(board[a][b].type == 'k' && Math.abs(a-x) >= 2) {
                    console.log(x, y, board[7][7]);
                    if(x == 6) {
                        console.log("hi");
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
            for(let i in spots) {
                spots[i][0].destroy();
            }
            spots.length = 0;
            selected=false;
        } else {

            if(spots) {
                for(let i in spots) {
                    spots[i][0].destroy();
                }
                spots.length = 0;
            }
            if(!obj || obj.team != turn) {
                return;
            }
            selected = true;
            select_pos = [x,y];
            let moves = obj.moves(board);
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
