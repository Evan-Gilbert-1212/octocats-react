import React, { Component } from 'react'
import AuthorImage from './AuthorImage'

export class Octocat extends Component {
  render() {
    return (
      <article>
        <img
          class="article-pic"
          src={this.props.cat.image}
          alt={this.props.cat.name}
        />
        <div class="article-num">#{this.props.cat.number}:</div>
        <div class="article-authname">{this.props.cat.name}</div>

        {this.props.cat.authors.reverse().map((author, index) => {
          return <AuthorImage index={index} image={author.image} />
        })}
      </article>
    )
  }
}

export default Octocat
