import React, { PureComponent } from 'react';

class Abcd extends PureComponent {

  handleClick = () => {
    alert('inside')
  }


  render(){

    let changableContent = null;

    if (this.state.content=='a') {
      persons = (
        <div>
          <p>a</p>
        </div>
      );
    }else if (this.state.content=='b') {
      persons = (
        <div>
          <p>a</p>
        </div>
      );
    }

    return (
      <div>
        <p onClick={this.handleClick}>sdfsdf</p>
        <p>sdfsdf</p>
        <p>sdfsdf</p>

        {changableContent}
      </div>
    );
  }
}

export default Abcd;
