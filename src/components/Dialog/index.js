import React, {Component, Fragment} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Dialog extends Component {
  constructor() {
    super()
    this.shoudComponentUpdate = PureRenderMixin.shouldComponentUpdate
  }
  render() {
    return (
      <div className="c-dialog__contain">
        <Fragment>
          {this.props.children}
        </Fragment>
      </div>
    )
  }
}

export default Dialog