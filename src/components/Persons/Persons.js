import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props){
    super(props);
    console.log('[persons.js]',props);
  }

//   componentWillUnmount() {
//     // Component is about to get removed => Perform any cleanup work here!
//     console.log('I\'m about to be removed!');
// }
//
//   componentDidMount(){
//     console.log('persons.js componentDidMount');
//   }
//
//   componentWillMount(){
//     console.log('persons.js componentWillMount');
//   }


  componentWillReceiveProps(){
    console.log('update person js insde componentWillRecieveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate persons.js',nextProps,nextState);
    return nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked 
    // return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate persons.js ',nextProps ,nextState);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate persons.js');
  }

  render(){
    console.log('persons js inside render');
    return this.props.persons.map((person, index) => {
        return <Person
        click = {() => this.props.clicked(index)}
        name ={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
      })
  }
}

  export default Persons;
