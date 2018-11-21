import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js]',props);
    this.state = {
      persons:[
        {id:'dsf',name:'Max',age:28},
        {id:'fghfgh',name:'Manu',age:25},
        {id:'fghhhhh' ,name:'abc',age:26},
      ],
      otherState: 'some other value',
      showPersons:false,
      toggleCount: 0
    }
  }


  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('update app js insde componentWillRecieveProps');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate app.js',nextProps,nextState);
  //   return nextState.persons != this.state.persons || nextState.showPersons != this.state.showPersons
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate app.js ',nextProps ,nextState);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate app.js');
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
      this.setState( (prevState, props) =>  {
        return {
          showPersons:!doesShow,
          toggleCount:prevState.toggleCount + 1
        }
      });
  }

  render() {

    console.log('appjs inside render ');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deleteNameHandler} changed={this.nameChangeHandler} />
        </div>
      );
    }


    return (

      <Aux>
        <button onClick={()=>{this.setState({showPersons:true})}}> Show person </button>
        <Cockpit
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
          showPersons = {this.state.showPersons} />
        {persons}
      </Aux>


    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null , 'Hi I am a React App'));
  }
}

export default withClass(App, classes.App);
