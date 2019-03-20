// Stateless functional component
// Komponente koje nemaju state i definises ih kao funkciju
// I dalje mozes da im prosledis prop, u ovom slucaju bi smo to uradili unutar ReactDOM.render() metoda
// Stateless function component nemaju pristup 'this'-u, kao sto ga nema ni funkcija, tako da moras props da mu prosledis kao argument i onda mozes da ga pozoves sa props.name
// Stateless su dosta brze od component-based pa bi ih trebalo koristiti gde god je to moguce
const User = () => {
    return (
        <div>
            <p>Name: {props.name}</p> {/*Da je class-based komponenta bilo bi this.props.name*/}
            <p>Age: </p>
        </div>
    );
};


ReactDOM.render(<User name="Dragan" age={26}/>, document.getElementById('app'));