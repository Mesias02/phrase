'use strict'

let phrase = 'La programación web es fundamental para el progreso';
let wordsArray = phrase.split(' ');

let filterWord = wordsArray.filter(word => word.length > 3);
alert(filterWord);
