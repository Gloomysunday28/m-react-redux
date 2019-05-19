import React, { Suspense, lazy, PureComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
// import {createPortal} from 'react-dom'
import logo from './logo.svg';
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './App.css';

const Dialog = lazy(() => import('./components/Dialog'))

const FancyButton = React.forwardRef((props, ref) => {
  const [count] = useState(0)
  useEffect(() => {
  })
  return (<button ref={ref} className="FancyButton">
    {count}
    {props.children}
  </button>)
});

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

const ArrayBtn = () => (
  [
    <span key="1">2313128</span>
  ]
)

const OutParents = (props, context) => {
  return class extends PureComponent {
    componentWillUnmount() {
      console.log('unmount')
    }
    render() {
      return <div>gasfdj</div>
    }
}
}


const OutParent = OutParents()

class DiffParent extends PureComponent {
  state = {
    a: 1
  }
  static contextTypes  = {
    themeColor: PropTypes.string
  }
  // componentDidMount() {
  //   this.setState(({a}) => ({
  //     a: ++a
  //   }))
  // }
  // componentWillUnmount() {
  //   console.log('unmount')
  // }
  static getDerivedStateFromProps(props, state) {
    state.c = props.c
    return null
  }
  render() {
    return <div>{this.state.c} gasgd {this.context.themeColor}</div>
  }
}

const Header = (props) => {
  return <div>{props.children.map((val, i) => <div key={i}>{val}</div>)}</div>
}


class App extends PureComponent {
  state = {
    a: 1,
    b: 2,
    index: 0,
    themeColor: '12'
  }
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }
  getRef = r => {
  }
  // componentWillReceiveProps(props) {
  //   console.log(props)
  // }
  componentDidMount = () => {
    // this.setState({
    //   a: 2
    // })
    // this.setState({ index: this.state.index + 1, a: this.state.a + 1}, () => {
    //   console.log(this.state.index);
    // })
    // this.setState({ index: this.state.index + 1 }, () => {
    //   console.log(this.state.index);
    // })
    this.setState(preState => ({ index: preState.index + 1 }), () => {
      console.log(this.state.index);
    })
    this.setState(preState => ({ index: preState.index + 1 }), () => {
      console.log(this.state.index);
    })
    console.log(this.state.index)
  }
  handleChange = e => {
    this.setState({b: e.target.value})
  }
  onClickHeader = e => {
    console.log(123)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color: 'red'}}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Suspense fallback={<section>Loading...</section>}>
            <Dialog ref={this.getRef}>{this.state.a}</Dialog>
          </Suspense>
          <DiffParent c={this.state.a}/>
          <FancyButton ref={ref}>Click me!</FancyButton>
          <ArrayBtn />
          <OutParent />
          <input onChange={this.handleChange}/>
          <Header onClick={this.onClickHeader}>
            <div>1</div>
            <div>2</div>
          </Header>
        </header>
      </div>
    );
  }
}

// >5452

export default App;
