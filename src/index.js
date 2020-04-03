import DomController from './DomController';
import Game from './Game';
import './style.css';

const game = new Game();
const dom = new DomController({
  root: 'body', 
  game
})

dom.init();
