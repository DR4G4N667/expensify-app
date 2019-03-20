// POSTAVKA:
// Imas dva js file-a u istom folderu, app.js i util.js:

// u util.js fajlu si napisao console.log('urgh!') i hoces to da importrujes
// import mozes da uradis na sledeci nacin:
// u app.js pises import './util.js';



// primer 2:
// definisao si funkciju u util.js i hoces da je pozoves u app.js

// ako pokusas sa import './util.js'; reci ce ti da funkcija nije definisana
// mozes da je exportujes kao 'named' export

// const square = (x) => x * x;
// export { square }   - ako ih imas vise export { square, add, subtract }

// a mozes da je exportujes i ovako

// export const square = (x) => x * x;


// Sada mozes da pozoves square funkciju u app.js fajlu

// Kad importujes modul ne koristis relativnu putanju kao kad importujes iz fajla u projektu vec samo navedes naziv
// za import kosultujes dokumentaciju

// PRIMER:
// nakon sto si instalirao react i react-dom, importujes module


// import React from 'react';
// import ReactDOM from 'react-dom';

