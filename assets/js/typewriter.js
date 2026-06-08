    // const phrases = ['Rinkmusic', 'RinkMu', 'RinkSync'];
    // const out = document.getElementById('t');
    // let p = 0, i = 0, deleting = false;
    // (function type() {
    //   const word = phrases[p];
    //   out.textContent = word.slice(0, i);
    //   if (!deleting && i < word.length) { i++; }
    //   else if (deleting && i > 0)       { i--; }
    //   else { deleting = !deleting; if (!deleting) p = (p + 1) % phrases.length; }
    //   setTimeout(type, deleting ? 100 : 90);
    // })();


//     const phrases = ['Rinkmus', 'RinkSync'];
// const out = document.getElementById('t');
// const pauseOn = { 'RinkSync': 2500 }; // ms to pause before deleting
// let p = 0, i = 0, deleting = false;

// (function type() {
//   const word = phrases[p];
//   out.textContent = word.slice(0, i);

//   if (!deleting && i < word.length) {
//     i++;
//   } else if (deleting && i > 0) {
//     i--;
//   } else {
//     if (!deleting && pauseOn[word]) {
//       // Just finished typing a paused word — wait before deleting
//       setTimeout(() => { deleting = true; type(); }, pauseOn[word]);
//       return;
//     }
//     deleting = !deleting;
//     if (!deleting) p = (p + 1) % phrases.length;
//   }

//   setTimeout(type, deleting ? 100 : 90);
// })();

const phrases = ['Rinkmusic', 'RinkSync'];
const out = document.getElementById('t');
const cursor = document.querySelector('.cursor');
const pauseOn = { 'RinkSync': 2500 };
let p = 0, i = 0, deleting = false;

(function type() {
  const word = phrases[p];
  out.textContent = word.slice(0, i);

  if (!deleting && i < word.length) {
    i++;
  } else if (deleting && i > 0) {
    i--;
  } else {
    if (!deleting && pauseOn[word]) {
      cursor.style.visibility = 'hidden';
      setTimeout(() => {
        cursor.style.visibility = 'visible';
        deleting = true;
        type();
      }, pauseOn[word]);
      return;
    }
    deleting = !deleting;
    if (!deleting) p = (p + 1) % phrases.length;
  }

  setTimeout(type, deleting ? 100 : 90);
})();