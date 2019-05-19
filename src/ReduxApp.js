import React, {Component} from 'react'
import Provide from './reactRedux/Provide'
import store from './reactRedux'
import ReduxHome from './ReduxHome'

class ReduxApp extends Component {
  render() {
    return (
      <Provide store={store}>
        <ReduxHome />
      </Provide>
    )
  }
}

export default ReduxApp