'use strict';
// Log what text is in current object with class of message
console.log(document.querySelector('.message').textContent);

// select object with message class and set text content to new text.
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
