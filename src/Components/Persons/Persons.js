import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent { //could use PureComponent if we need to check all the props changed or not without the shouldComponentUpdate

    //static getDerivedStateFromProps(props, state) {
    //   console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.personArray !== this.props.personArray || nextProps.isAuthenticated !== this.props.isAuthenticated) {
            console.log('[Persons.js] nextProps is changed');
            return true;
        } else {
            console.log('[Persons.js] nextProps is not changed');
            return false;
        }

    }*/

    getSnapshotBeforeUpdate(prevPops, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return { messeage: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] Rendering...')
        return (
            this.props.personArray.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        age={person.age}
                        nameChange={this.props.nameChange.bind(this, person.id)}
                        click={this.props.click.bind(this, index)}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                )
            })
        )
    }
}

export default Persons;

