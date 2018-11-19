import React from 'react';

const cockpit = (props) => {
  return(
    <div>
    <h1>Hi, I am a React App</h1>
    <p className={props.classes.join(' ')}>This is really working</p>
    <button
      className = {props.btnClass}
     onClick={props.toggle}>Toggle Persons
    </button>
    </div>
  )
}

export default cockpit;
