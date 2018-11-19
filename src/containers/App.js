import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons:[
      {id:'dsf',name:'Max',age:28},
      {id:'fghfgh',name:'Manu',age:25},
      {id:'fghhhhh' ,name:'abc',age:26},
    ],
    otherState: 'some other value',
    showPersons:false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deleteNameHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = ()=>{
      const doesShow = this.state.showPersons
      this.setState({showPersons:!doesShow})
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deleteNameHandler} changed={this.nameChangeHandler} />
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); //classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); //classes = ['red', 'bold'];
    }


    return (

      <div className={classes.App}>
        <Cockpit btnClass = {btnClass} toggle={this.togglePersonsHandler} classes={assignedClasses}/>
        {persons}
      </div>

    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Hi I am a React App'));
  }
}

export default App;
