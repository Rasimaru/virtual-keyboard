'use strict';

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'Alt',
  'Control', 'Meta', 'Alt', ' ', 'ContextMenu', 'Control', '←', '↓', '→'
]
const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'AltRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

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
    switch (key) {
      case 'Meta':
        btn.textContent = '⊞';
        break;
      case 'Control':
        btn.textContent = 'Ctrl';
        break;
      case 'ContextMenu':
        btn.textContent = '▤';
        break;
      default:
        btn.textContent = key;
    }
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

const codeList = codes;
codeList.map(code => {
  const keys = document.querySelectorAll('.keys');
  console.log(keys);

})


// /* When loading the DOM, declare the variables and work with them */
window.addEventListener('load', () => {
  const keyboard = document.querySelector('.keyboard');
  const output = keyboard.querySelector('.text');
  const keyboardKeys = keyboard.querySelector('.keyboard-keys');
  const buttons = keyboardKeys.querySelectorAll('.keys');
  let textInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      e.preventDefault();
      const btnValue = button.textContent;
      textInput += btnValue;
      output.textContent = textInput;
    });
    button.addEventListener('transitionend', () => button.blur());
  });

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    buttons.forEach(button => {
      // console.log(button);  
      if (button.dataset.keyCode === key) {
        button.classList.add('active');
      }
    });
  });

  document.addEventListener('keyup', (e) => {
    const key = e.key;
    buttons.forEach(button => {
      if (button.dataset.keyCode === key) {
        button.classList.remove('active');
      }
    });
  });
});

