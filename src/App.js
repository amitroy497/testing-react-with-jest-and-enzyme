import React from 'react'
import './app.scss'
import Header from './components/header/index'
import Headline from './components/headline/index'

const tempArr = [
  {
    fName: 'Amit',
    lName: 'Roy',
    email: 'amitroy497@yahoo.com',
    age: 27,
    onlineStatus: true,
  },
]

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline
            header='Posts'
            desc='Click the button to render post'
            tempArr={tempArr}
          />
        </section>
      </div>
    )
  }
}

export default App
