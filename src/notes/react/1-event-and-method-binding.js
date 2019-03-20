const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}

console.log(obj.getName());// Vraca vrednost 'Vikram'
console.log(obj.getName);//Vraca funkciju --->f getName(){return this.name}

const getName = obj.getName();
console.log(getName);// Vraca vrednost 'Vikram'

const getName = obj.getName;
console.log(getName());// Cannot read property 'name' of undefind
// Ako metod iz objekta koji u sebi sadrzi 'this' brebacis u promenljivu i pokusas da pozoves dobices error jer this vise ne ukazuje na taj objekat vec ima vrednost undefind.

// Keyword this unutar funkcije po default-u imaju vrednost 'undefind';

// PRIMER:
function func() {
    console.log(this);
}

func();// undefind

// Ovaj gubitak this-a mozemo da zaobidjemo js bind() metodom.
// bind() vraca kopiju funkcije ciji this keyword ima vrednos koju ima u argumentu koji si dostavio bindu. Metod je izmedju ostalog koristan kod event handlera jer tu gubimo vrednost this-a

// PRIMER:


const getName = obj.getName.bind();
console.log(getName());// Cannot read property 'name' of undefind


const getName = obj.getName.bind(obj);
console.log(getName());// 'Vikram'


// BIND UNUTAR KOMPONENTE

// PRIMER 1:
class Options extends React.Component {
    handleRemoveAll() {
        // alert('Removed!');
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

// Ovo nece raditi jer this unutar event handlera nije isti this koji imaju render i drugi metodi unutar klase vec ima vrednost undefind

// PRIMER 2:
class Options extends React.Component {
    handleRemoveAll() {
        // alert('Removed!');
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

// Ovo ce raditi jer sada this ima istu vrednost kao this render metoda ali svaki put kad opali event handler dradimo bind metod sto je dosta skupo(oduzima dosta resursa)

// PRIMER 3:
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        // alert('Removed!');
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

// Prepravljamo konstruktor parent klase(React.Component) kome prosledjujemo parametar props, isti parametar prosledjujemo i super() metodu i bindujemo this handleRemoveAll metodu. Na taj nacin handleRemoveAll uvek ima dostupan this ove klase i nemora da se binduje svaki put kad event opali 