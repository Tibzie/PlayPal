import React, { Component } from 'react'

class Serial extends Component {
  render() {
    return (
      <div className="serial">
        { this.props.serialNumber }
      </div>
    )
  }
}

export default Serial;