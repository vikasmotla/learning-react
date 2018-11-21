import React from 'react';

import classes from './Cockpit.module.css'

import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  console.log(props);

  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red ); //classes = ['red'];
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold ); //classes = ['red', 'bold'];
  }


   //you can simply use <> </>  in react 16.2 and above in place of <Aux></Aux>

  return(
    <Aux>
      <h1>Hi, I am a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className = {btnClass}
        onClick={props.toggle}>Toggle Persons
      </button>
    </Aux>
  )
}

export default cockpit;
