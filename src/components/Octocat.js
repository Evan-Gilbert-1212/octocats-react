import React, { Component } from 'react'

export class Octocat extends Component {
  render() {
    return (
      <article>
        <img class="article-pic" src={this.props.image} alt={this.props.name} />
        <div class="article-num">#{this.props.id}:</div>
        <div class="article-authname">{this.props.name}</div>
        <img
          class="article-authimage"
          src={this.props.authimage}
          alt="Author Icon"
        />
      </article>
    )
  }
}

export default Octocat
