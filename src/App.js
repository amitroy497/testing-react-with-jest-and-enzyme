import React from 'react'
import './app.scss'
import Header from './components/header/index'
import Headline from './components/headline/index'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render post' />
        </section>
      </div>
    )
  }
}

export default App
