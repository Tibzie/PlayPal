import React, { Component } from 'react'
import { Button } from 'reactstrap';

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick}>Go</Button>
      </div>
    )
  }
}

export default ButtonComp;