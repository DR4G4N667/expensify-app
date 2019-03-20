// Local storage je key/value storage

localStorage.setItem('name', 'Dragan');

localStorage.getItem('name'); //Vraca 'Dragan'

localStorage.removeItem('name'); //Brise iz localstorage-a

// localStorage radi samo sa string podacima

localStorage.setItem('age', 33);
localStorage.getItem('age'); // Vraca string "33"


localStorage.clear(); //brise sve key/value parove unutar local storage-a


// JSON

JSON.stringify() //uzima js objekat i pretvara ga u string varijantu
JSON.parse() //radi obrnuto

JSON.stringify({ age: 33 }); //Vraca "{"age", 33}"