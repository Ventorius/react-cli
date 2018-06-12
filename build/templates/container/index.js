import React, { Component } from 'react'
import { connect } from 'react-redux'

class COMPONENT_NAME extends Component {

  render() {
    return (
      <div className="COMPONENT_NAME">
        COMPONENT_NAME
      </div>
    )
  }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps, {})(COMPONENT_NAME)