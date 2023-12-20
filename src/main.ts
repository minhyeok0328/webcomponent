import './App.ts';

const root: HTMLElement = document.querySelector('#app')!;

if (!root) {
  throw new Error('asd');
}

root.innerHTML = '<app-component></app-component>';
