// Component state je zapravo objekat(key/value par). Ideja je da umesto , kao sto smo radili u counter-example.js, da renedrujemo jsx svaki put kad se odigra event da postavimo default state u vidu objekta koji ce inicijalno biti renderovan i svaki put kad se vrednost promeni da se komponeta rerenderuje

// Sta se dogadja sa state-on

// 1. Postavljamo default state object
// 2. Komponenta renderuje sa default state vrednostima
// 3. Menja se state u zavisnosti od eventa
// 4. Komponenta se rerenderuje koristeci nove state vrednosti
// 5. Krecemo ponovo od 3.


// PRIMER:
// Da bi smo renderovali templateTwo kad opali svaki event morali smo da ga stavimo u renderCounterApp funkciju i da tu funkciju pozovemo svaki put kad event opali

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
// console.log(count);
const removeOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();

};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>+1</button>
            <button  onClick={removeOne}>-1</button>
            <button  onClick={reset}>Reset</button>
        </div>);
    ReactDOM.render(templateTwo, appRoot);    
};

renderCounterApp();

// Umesto toga komponenti mozemo da postavimo inital state i svaki put kad se state promeni komponenta ce se ponovo renderovati
// Ovo je primer istog koda odozgo prebacenog u komponentu

// 1. Postavimo initial state kao objekat sa key/value parovima unutar konstruktor funckcije, dodelimo mu inicijalnu vrednost i pozovemo na mestima gde hocemo da ga renderujemo u ovom slucjau unutar <h1> elementa
// 2. Napravimo metode koji ce biti pozvani onClick eventom i unutar konstruktor funkcije bindujemo 'this' za te metode.
// 3. Unutar metoda manipulisemo sa state-om pozivajuci setState() metod koji prihvata argument koji mozes a nazoves kako god ali je neka konvencija da se zove prevState i on predstavalja prethodno stanje state-a.
    // -u handleAddOne metodu inkrementirali smo state za 1 tako sto smo vrednost counta iz prethodnog stanja povecali za 1
    // -slicna je prica sa handleRemoveOne, trebalo nam je prethodno stanje da bi smo umanjili za 1
    // - u handleReset nismo morali da prosledimo funkciji prethdno stanje jer nas ne zanima, ideja je samo da stanje vratimo na nulu

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleRemoveOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button  onClick={this.handleAddOne}>+1</button>
                <button  onClick={this.handleRemoveOne}>-1</button>
                <button  onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// STA RADITI SA NESTOVANIM KOMPONENTAMA?

// PRIMER:
// Imamo componentu Parent koja renderuje 3 child komponente i recimo da Child_2 komponenta treba kada se klikne na button unutar nje da odradi alert sa random vrednoscu iz state options niza. 
// Posto samo parent moze da salje props childu a nikako obrnuto moramo da:
// 1. napravimo metod unutar Parent componente i da ga bindujemo
// 2. da prosledimo taj metod Parent komponente kao props childu
// 3. pozivamo metod unutar child komponente

class Parent extends React.Component {
    constructor(props) {
        super();
        this.pickRandom = this.pickRandom.bind(this); //Bindujemo metod
        this.state = {
            options: [One, Two, Three]
        }
    }
    pickRandom() { //Definisemo metod
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render() {
        return (
            <div>
                <Child_1 />
                <Child_2  pickRandom={this.pickRandom} />  {/*Prosledjujemo metod kao props */}
                <Child_3 />
            </div>
        );
    }
}

class Child_2 extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.pickRandom}>Choose Random</button> {/*Pozivamo metod*/}
            </div>
        );
    }
}

// KAKO MENJATI PARENT STATE IZ CHILD KOMPONENTE?

// PRIMER:
// Recimo da Child_3 komponenta ima input formu sa input fieldom i submit buttonom i da svaki put kad se nesto submituje vrednost iz input fielda se dodaje u niz unutar Parent state-a
// 1. Posto koristimo onSubmit event unutar forme treba nam funkcija koja ce preventovati default i uhvatiti input field value, to je najbole uraditi direktno u komponenti. 
// 2. Posto treba da menjamo vrednost state-a iz parent komponente pravimo u Parent komponenti metod koji ce prihvatati parametar options koji smo uhvatili u submitForm funkciji i koristeci metod concat() dodati option nizu u state-u Parent komponente



class Parent extends React.Component {
    constructor(props) {
        super();
        this.pickRandom = this.pickRandom.bind(this); //Bindujemo metod
        this.state = {
            options: []
        }
    }
    addOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
                 /*concat() od dva niza pravi novi gde su oba spojena, ako mu das vrednos da nije niz samo ce dodati tu vrednost u niz kom si ga pozvao*/
            };
        });
    }    
    render() {
        return (
            <div>
                <Child_1 />
                <Child_2 />
                <Child_3 />
            </div>
        );
    }
}

class Child_3 extends React.Component {

    submitForm(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); {/*trim koristimo jer uklanja empty                                                          space pre i posle stringa ali ne i                                                         unutar pa tako ogranicis da neko                                                           ne unese empty space i submituje*/}
    }

    render() {
        return (
            <div>
                <form onSubmit={submitForm}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// 3. Prosledjujemo child komponenti addOption() metod u vidu propsa

// <Child_3  addOption={this.addOption}/>

// 4. Unutar submitForm metoda bi smo sada mogli da pozovemo addOption() metod kako props, naravno da bi smo to uradili, postocemo koristiti 'this' (this.proprs.addOption()) moramo da ga binudjemoe, pa prvo pravimo konstruktor unutar child klase 

// construrctor(props){
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
// }

// submitForm() {
//     this.props.addOption();
// }

// 5. Medjutim ideja je i da stavimo malo logike vezano za input field, to radimo tako sto u child komponenti u submitFormu napravimo option promenljivu koju cemo proslediti addOption() metodu
// I napravili smo state unutar same child komponente koji je inicijalno undefind a setState postravljamo da vrednost bude jednaka onome sto vrati addOptions metod(promenljiva error). A



// Unutar child klase
// constructor(props) {
//     super(props);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     this.state = {
//         error: undefined
//     }
// }
// formSubmit(e) {
//     e.preventDefault();

//     const option = e.target.elements.option.value.trim();
//     const error = this.props.addOption(option);
//     this.setState(() => {
//         return {
//             error: error
//         }
//     });
// }

// Unutar parent klase
// handleAddOption(option) {
//     if(!option){
//         return 'Enter valid value to add item';
//     } else if (this.state.options.indexOf(option) > -1) {
//         return 'This option already exists';
//     }
//     this.setState((prevState) => {
//         return {
//             options: prevState.options.concat([option])
//         }
//     });
// }