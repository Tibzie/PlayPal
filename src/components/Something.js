import React, { Component } from 'react'

class Something extends Component {
  render() {
    return (
      <div>
        { this.props.serialNumber }
      </div>
    )
  }
}

export default Something;