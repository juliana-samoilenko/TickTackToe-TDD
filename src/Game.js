export default class Game {
  constructor() {
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
    this._board[0][0] = 'x';
  }
}