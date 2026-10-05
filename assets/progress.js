// Under-construction page behaviour: typewriter heading + progress bar.
// No external requests. No cookies. No storage.
(function () {
  'use strict';

  var FULL = 'Scelestic.com';
  var TARGET = 62;           // honest placeholder, not a claim of progress
  var REDUCED = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var typed = document.querySelector('.typed');
  var fill = document.querySelector('.fill');
  var num = document.querySelector('.num');

  if (!typed || !fill || !num) { return; }

  function setPct(p) {
    var v = Math.max(0, Math.min(100, Math.round(p)));
    fill.style.width = v + '%';
    num.textContent = String(v);
  }

  function setWord(w) {
    typed.textContent = w;
    typed.setAttribute('data-text', w);
  }

  if (REDUCED) {
    setWord(FULL);
    setPct(TARGET);
    return;
  }

  // Typewriter reveal
  var i = 0;
  function typeStep() {
    setWord(FULL.slice(0, i));
    i += 1;
    if (i <= FULL.length) {
      window.setTimeout(typeStep, 62);
    }
  }

  // Progress climbs to TARGET and then breathes slightly, forever.
  var value = 0;
  function progressStep() {
    var remaining = TARGET - value;
    var step = Math.max(0.6, remaining * 0.12);
    value = Math.min(TARGET, value + step);
    setPct(value);

    if (value < TARGET) {
      window.setTimeout(progressStep, 90);
    } else {
      window.setInterval(function () {
        setPct(TARGET + Math.sin(Date.now() / 900) * 2);
      }, 220);
    }
  }

  window.setTimeout(typeStep, 320);
  window.setTimeout(progressStep, 260);
})();
