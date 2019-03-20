// Class-based komponente za razliku od functional stateless komponenti imaju life cycle metode koji okidaju u otredjenom trenutku 'zivota' komponente(kada se komponenta renderuje, kada se dogodi promena unutar komponente, kada se skine iz DOM-a...)

componenetDidMount() //-kad se komponenta mountuje u DOM
componenetDidUpdate() //-on props/state update. Prihvata dva argumenta prvi je za props drugi za state mozes ih nazavati kako god ali je praksa prevProps i prevState

// componenetDidUpdate(prevProps, prevState) {
// }

componentWillUnmount() //just before component goes away






https://reactjs.org/docs/react-component.html


// Mounting
// These methods are called when an instance of a component is being created and inserted into the DOM:

constructor()
/*static*/ getDerivedStateFromProps()
componentWillMount() / UNSAFE_componentWillMount()
render()
componentDidMount()



// Updating
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
/*static*/ getDerivedStateFromProps()
shouldComponentUpdate()
componentWillUpdate() / UNSAFE_componentWillUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()



// Unmounting
// This method is called when a component is being removed from the DOM:

componentWillUnmount()


// Error Handling
// This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

componentDidCatch()