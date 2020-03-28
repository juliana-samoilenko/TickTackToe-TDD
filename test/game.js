import {expect} from 'chai';
import Game from '../src/Game';

const initialGameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let game;

beforeEach(() => { game = new Game() })

describe('Game', () => {
  it('Should return empty game board', () => {
    const board = game.getState();

    expect(board).to.deep.equal(initialGameBoard);
  })
})

it('Writes user\'s symbol in top left cell', () => {
  const x = 0, y = 0;

  game.acceptUserMove(x, y);
  const board = game.getState();

  expect(board[x][y]).to.equal('x');
})