import React from 'react'

import SampleComponent from './components/SampleComponent'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is my app component.</h1>
        <SampleComponent />
      </div>
    )
  }
}

export default App
