'use strict';
'format es6'; // force SystemJS to transpile exercise

function write() {
  const element = document.getElementById('example');

  let output = '';
  let i;

  for (i = 0; i < arguments.length; i += 1) {
    output += arguments[i] + ' ';
  }

  element.innerHTML = output;
}

write('JavaScript For Life');
