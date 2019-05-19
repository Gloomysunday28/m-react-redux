import React, {Component} from 'react'
import connect from './reactRedux/Connect'

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'color',
        color: 'blue'
      })
    }
  }
}

class ReduxHome extends Component {
  handleClick = () => {
    this.props.onClick()
  }
  render() {
    return (
      <div style={{color: this.props.color}} onClick={this.handleClick}>Redux</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxHome)