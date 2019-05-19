import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Provide extends Component { // 根组件, 利用context传递store
  static defaultProps = {
    store: null
  }
  static childContextTypes = { // 用来检验getChildContext返回的值
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  componentWillMount() {
    // const store = this.props.store
    // store.subscribe(_ => )
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Provide