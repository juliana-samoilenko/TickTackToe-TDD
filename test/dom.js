import {expect} from 'chai';
import jsdom from 'jsdom';
import DomController from '../src/DomController';
import Game from '../src/Game';
import { isMainThread } from 'worker_threads';

const {JSDOM} = jsdom;
const dom = new JSDOM('<html><body id="root"></body></html>');
const createInstance = () => new DomController('#root');

global.window = dom.window;
global.document = dom.window.document;

afterEach(() => {
  document.body.innerHTML = '';
})

describe('DOM controller', () => {
  it('Create empty table', () => {
    const domController = createInstance();

    domController.createTable();

    expect(document.querySelectorAll('table').length).to.equal(1);
  })

  it('Creates table with 3 rows and 3 columns', () => {
    const domController = createInstance();

    domController.createTable(3, 3);

    expect(document.querySelectorAll('table').length).to.equal(1);
    expect(document.querySelectorAll('tr').length).to.equal(3);
    expect(document.querySelectorAll('td').length).to.equal(9);
  })
})