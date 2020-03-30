import {expect} from 'chai';
import jsdom from 'jsdom';
import Game from '../src/Game';
import { isMainThread } from 'worker_threads';

const {JSDOM} = jsdom;
const dom = new JSDOM(<html><body id="root"></body></html>);

global.window = dom.window;
global.document = dom.window.document;

describe('DOM controller', () => {
  it('Create empty table', () => {
    const domController = new DomController('#root');

    domController.createTable();

    expect(document.querySelectorAll('table').length).to.equal(1);
  })
})


class DomController {
  constructor(root) {

  }

  createTable() {

  }
}