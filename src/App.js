import React from 'react'
import MyOctocats from './components/MyOctocats'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MyOctocats />
        <Footer />
      </>
    )
  }
}

export default App
