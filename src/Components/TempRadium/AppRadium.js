import React from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends React.Component {
    state = {
        person: [
            { id: 1, name: "James", age: 28 },
            { id: 2, name: "Rajan", age: 23 },
            { id: 3, name: "Pintu", age: 30 },
            { id: 4, name: "Jamie", age: 37 }
        ],
        otherState: "the other state",
        showPerson: false
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
        let newPerson = [...this.state.person];                   // My Way of doing it

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




    render() {
        console.log(this.state);

        const cursorStyle = {
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        const style = {
            backgroundColor: "green",
            font: "inherit",
            padding: "10px",
            border: "1px solid blue",
            boxShadow: "0 2px 3px #ccc",
            margin: "2px",
            cursor: "pointer",
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {
                        this.state.person.map((person, index) => {
                            return (
                                <Person
                                    id={person.id}
                                    name={person.name}
                                    age={person.age}
                                    style={cursorStyle}
                                    nameChange={this.nameChangedHandler.bind(this, person.id)}
                                    click={this.deleteNameHandler.bind(this, index)}
                                    key={person.id}
                                />
                            )
                        })
                    }

                </div>
            );
            style.backgroundColor = 'Red';
            style[':hover'] = {

                backgroundColor: 'salmon',
                color: 'black'

            }
        } else {
            persons = null;
        }

        /* let classes = () =>{
           if (this.state.person.length<=2) 
           return ['red','bold'].join(" ");
           else 
           return null;
         }*/

        const classes = [];
        if (this.state.person.length <= 2)
            classes.push('red');
        if (this.state.person.length <= 1)
            classes.push('bold');

        return (
            <StyleRoot>
                <div className="App">
                    <p className={classes.join(' ')}>The complete React app</p>
                    <button
                        style={style}
                        onClick={() => this.switchNameHandler('James Bond!')}
                        key='1'
                    >Switch Name</button>
                    <button
                        style={style}
                        onClick={this.toggelShowPerson}
                        key='2'
                    >
                        Show Content
        </button>

                    <div>
                        {persons}
                    </div>

                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
