import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const style = {
      backgroundColor:'white',
      font :'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      boxShadow:'0px 2px 4px blue'

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deleteNameHandler(index)}
            name ={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
         onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Hi I am a React App'));
  }
}

export default App;
