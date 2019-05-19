import React, {Component} from 'react'
import PropTypes from 'prop-types'

const connect = (
  mapStateToProps,
  mapDispatchToProps
) => (WrapperComponent /** 后面还可以再传参数当做props */) => {
  return class extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    state = {
      allStore: null
    }
    componentWillMount() {
      const store = this.context.store // 减小访问深度
      this.updateState()
      store.subscribe(this.updateState)
    }
    updateState = _ => {
      const store = this.context.store // 减小访问深度
      const state = mapStateToProps ? mapStateToProps(store.getState()) : {} // 获取改组件需要的state值
      const event = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {} // 获取改组件需要的触发事件
      const allStore = {
        ...this.props,
        ...state,
        ...event
      } // 将传进来的props和需要的state 和 event结合起来
      this.setState(() => ({
        allStore
      }))
      return allStore
    }
    render() {
      return <WrapperComponent {...this.state.allStore}/>
    }
  }
}

export default connect