import { printMemory, getHistory } from './memory.js';

function plot(data) {
  import('./plot.js')
    .then(({ plot, COLORS: { green, red, orange, purple } })   => plot(data, [green, red, orange, red, purple, orange, purple]));
}

sample2Btn.onclick = run;

let a, b, c;

function run(flatten) {
  console.log('wait until you see a chart');
  printMemory('baseline')
    .then(async () => {
      a = await fetch('https://html.spec.whatwg.org/').then(res => res.text());
      console.log('a', a.length);
      return printMemory('fetch()');
    })
    .then(() => {
      b = a.substring(0, 12);
      console.log('b', b.length);
      return printMemory('b = a.substring(0,12)');
    })
    .then(() => {
      a = null;
      return printMemory('a = null');
    })
    .then(() => {
      c = b.substring(0, 13);
      return printMemory('c=b.substring(0,13)');
    })
    .then(() => {
      b = null;
      return printMemory('b = null');
    })
    .then(() => {
      c = null;
      return printMemory('c = null');
    })
    .then(() => {
      plot(getHistory());
    });
}

