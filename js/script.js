'use strict';

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', '↑', 'alt',
  'ctrl', '⊞', 'alt', ' ', '▤', 'ctrl', '←', '↓', '→'
]

function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const keyboardOutput = document.createElement('div');
  keyboardOutput.classList.add('output-body');
  const output = document.createElement('textarea');
  output.classList.add('text');
  keyboardOutput.append(output);

  const keyboardKeys = document.createElement('div');
  keyboardKeys.append(createButtons());
  keyboardKeys.classList.add('keyboard-keys');

  keyboard.append(keyboardOutput, keyboardKeys);
  return keyboard;
}

function createButtons() {
  const keyList = keys;
  const buttons = new DocumentFragment();
  keyList.map(key => {
    const btn = document.createElement('button');
    btn.classList.add('keys');
    btn.dataset.keyCode = key;
    btn.textContent = key;
    buttons.append(btn);
    return true;
  });
  return buttons;
}

function getContent() {
  const addKeyboard = createKeyboard();
  document.body.append(addKeyboard);
}

document.addEventListener('DOMContentLoaded', getContent);