export default class Game {
  constructor() {
    this._userMoveSymbol = 'x';
    this._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  getState() {
    return this._board;
  }

  acceptUserMove(x, y) {
    this._updateBoard(0, 0);
  }

  _updateBoard(x, y) {
    this._board[x][y] = this._userMoveSymbol;
  }
}