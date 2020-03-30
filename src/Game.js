export default class Game {
  constructor() {
    this._userName = 'user';
    this._computerName = 'computer';
    this._userMoveSymbol = 'x';
    this._computerMoveSymbol = 'o';
    this._fieldSize = 3;
    this._history = [];
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
    if (!this._isCellFree(x, y)) {
      return  this._throwException('cell is already taken');
    }

    this._updateHistory(this._userName, x, y);
    this._updateBoard(x, y);
  }

  createComputerMove() {
    if (this._getFreeCellsCount() === 0) {
      return this._throwException('no cells available');
    }
    const [x, y] = this._getFreeRandomCoordinates();

    this._updateHistory(this._computerName, x, y);
    this._updateBoard(x, y, {
      symbol: this._computerMoveSymbol
    })
  }

  getMoveHistory() {
    return this._history;
  }

  ifWinner(player) {
    const symbol = player === this._userName
      ? this._userMoveSymbol
      : this._computerMoveSymbol;

    const win = [...Array(this._fieldSize).keys()].reduce((res, i) => {
      return this._board[i][0] === symbol
        && this._board[i][1] === symbol
        && this._board[i][2] === symbol
        || res
    }, false);
    
    return win;
  }

  _updateHistory(turn, x, y) {
    this._history.push({turn, x, y});
  }

  _updateBoard(x, y, config={}) {
    const {symbol = this._userMoveSymbol} = config;
    this._board[x][y] = symbol;
  }

  _isCellFree(x, y) {
    return !this._board[x][y];
  }

  _throwException(msg) {
    throw new Error(msg);
  }

  _getRandomCoordinate() {
    return Math.floor(Math.random() * (this._fieldSize - 0));
  }

  _getFreeRandomCoordinates() {
    let x = this._getRandomCoordinate();
    let y = this._getRandomCoordinate();

    while (!!this._board[x][y]) {
      x = this._getRandomCoordinate();
      y = this._getRandomCoordinate();
    }

    return [x, y];
  }

  _getFreeCellsCount() {
    return this._board.reduce((total, row) => 
      row.reduce((count, el) => 
      el === '' ? ++count : count, total), 0);
  }
}