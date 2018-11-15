import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:25},
      {name:'abc',age:26},
    ],
    otherState: 'some other value',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    //this.state.persons[0].name = "Maxmillion"
    this.setState({persons:[
      {name:newName,age:28},
      {name:'Manu',age:25},
      {name:'asdfbc',age:26},
    ] })
  }

  nameChangeHandler = (event) => {
    this.setState({persons:[
      {name:'max',age:28},
      {name:event.target.value,age:22},
      {name:'asdfbc',age:26},
    ] })
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
      boxShadow:'0px 2px 6px blue'

    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
         onClick={this.togglePersonsHandler}>Switch Name
        </button>
        { this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
           click={() =>this.switchNameHandler('msax')}
           changed={this.nameChangeHandler}
          >My Hobbies : Racing!</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
        }

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Hi I am a React App'));
  }
}

export default App;
