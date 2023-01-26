
// Base class for a piece
export class Piece {
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

export class Queen extends Piece {
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

export class King extends Piece {
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

export class Bishop extends Piece {
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

export class Rook extends Piece {
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

export class Knight extends Piece {
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

export class Pawn extends Piece {
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