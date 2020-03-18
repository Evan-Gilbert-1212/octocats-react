import React, { Component } from 'react'
import penguin25 from '../Images/penguin25.png'

export class Octocat extends Component {
  render() {
    return (
      <article>
        <img class="article-pic" src={this.props.url} alt={this.props.name} />
        <div class="article-num">#{this.props.id}:</div>
        <div class="article-authname">{this.props.name}</div>
        <img
          class="article-authimage"
          src={penguin25}
          alt="Penguin Profile Icon"
        />
      </article>
    )
  }
}

export default Octocat
