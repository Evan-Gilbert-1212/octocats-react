import React from 'react'
import Octocat from './Octocat'

export class MyOctocats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      myOctocats: [],
    }
  }

  componentDidMount() {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(result => result.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            myOctocats: result.data,
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, myOctocats } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <section>
          {myOctocats.map(cat => {
            return <Octocat cat={cat} />
          })}
        </section>
      )
    }
  }
}

export default MyOctocats
