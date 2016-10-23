import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import AppContainer from './components/AppContainer'

const $app = document.getElementById('app')

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  $app
)
