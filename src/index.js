import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxApp from './ReduxApp';
import * as serviceWorker from './serviceWorker';

// >4324

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
