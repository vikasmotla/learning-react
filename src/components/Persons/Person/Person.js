import React, { PureComponent} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.module.css'

import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'



class Person extends PureComponent {
  render(){
    return (
      <Aux>
        <p onClick={this.props.click} >I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
    // return [
    //   <p key="1" onClick={this.props.click} >I am {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p key="2" >{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person , classes.Person);
