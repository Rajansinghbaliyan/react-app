import React from 'react';
import classes from './App.module.css';
//import Person from '../Components/Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      { id: 1, name: "James", age: 28 },
      { id: 2, name: "Rajan", age: 23 },
      { id: 3, name: "Pintu", age: 30 },
      { id: 4, name: "Jamie", age: 37 }
    ],
    otherState: "the other state",
    showPerson: false ,
    msg: 'ButtonClicked 0'
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { id: 1, name: newName, age: 32 },
        { id: 2, name: "Rajan singh Baliyan", age: 24 },
        { id: 3, name: "Pintu Saroha", age: 29 }
      ]
    })
  }

  nameChangedHandler = (idSelected, event) => {
    let newPerson = [...this.state.person];            // My Way of doing it

    /*newPerson = newPerson.map(person => {
      if (person.id === idSelected) {
        person.name = event.target.value;
        return person;
      }
      else
        return person;
    });*/

    const personIndex = newPerson.findIndex(p => {
      return p.id === idSelected;
    });

    newPerson[personIndex].name = event.target.value;

    this.setState({
      person: newPerson
    })

  }

  toggelShowPerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }


  deleteNameHandler = (indexSelected) => {
    let newPerson = [...this.state.person];         //to create the copy of the state.
    newPerson.splice(indexSelected, 1);
    this.setState({
      person: newPerson
    })
  }




  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps is called");
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldcomponentUpdate')
    return true
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate')
  }
  
changeThevalue = () => {
  let x = 0;
  x++;
  this.setState( {msg: 'ButtonClicked ' + x});
}





  render() {
    console.log('render is called');

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          personArray={this.state.person}
          click={this.deleteNameHandler}
          nameChange={this.nameChangedHandler}//.bind(this, person.id)}
        />
      );


    } else {
      persons = null;

    }

    /* let classes = () =>{
       if (this.state.person.length<=2) 
       return ['red','bold'].join(" ");
       else 
       return null;
     }*/
     



    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          state={this.state}
          persons={persons}
          clickedToggel={this.toggelShowPerson}
          clickedSwitch={this.switchNameHandler}
        />
        <button style={classes.buttton} onClick={this.changeThevalue}>{this.state.msg}</button>
      </div>

    );
  }
}

export default App;
