import React from 'react'
import catstello from '../Images/catstello.png'
import daftpunktocat_guy from '../Images/daftpunktocat-guy.gif'
import daftpunktocat_thomas from '../Images/daftpunktocat-thomas.gif'
import dunetocat from '../Images/Dunetocat.png'
import fintechtocat from '../Images/Fintechtocat.png'
import hulatocat from '../Images/Hulatocat.gif'
import ironcat from '../Images/ironcat.jpg'
import justicetocat from '../Images/justicetocat.jpg'
import octobiwan from '../Images/octobiwan.jpg'
import sentrytocat from '../Images/Sentrytocat.jpg'
import spidertocat from '../Images/spidertocat.png'
import stormtroopocat from '../Images/stormtroopocat.png'
import Octocat from './Octocat'

export class MyOctocats extends React.Component {
  render() {
    const myOctocats = [
      { name: 'Fintechtocat', id: 149, url: fintechtocat },
      { name: 'Sentrytocat', id: 143, url: sentrytocat },
      { name: 'Hulatocat', id: 139, url: hulatocat },
      { name: 'Justicetocat', id: 134, url: justicetocat },
      { name: 'Catstello', id: 128, url: catstello },
      { name: 'Dunetocat', id: 104, url: dunetocat },
      { name: 'Daftpunktocat-Thomas', id: 101, url: daftpunktocat_thomas },
      { name: 'Daftpunktocat-Guy', id: 100, url: daftpunktocat_guy },
      { name: 'Spidertocat', id: 88, url: spidertocat },
      { name: 'Stormtroopertocat', id: 85, url: stormtroopocat },
      { name: 'Ironcat', id: 24, url: ironcat },
      { name: 'Octobi Wan Catnobi', id: 3, url: octobiwan },
    ]

    return (
      <section>
        {myOctocats.map(cat => {
          return <Octocat name={cat.name} id={cat.id} url={cat.url} />
        })}
      </section>
    )
  }
}

export default MyOctocats
