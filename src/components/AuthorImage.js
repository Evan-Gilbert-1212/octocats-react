import React, { Component } from 'react'

export class AuthorImage extends Component {
  render() {
    return (
      <img
        class={`article-authimage${this.props.index + 1}`}
        src={this.props.image}
        alt="Author Icon"
      />
    )
  }
}

export default AuthorImage
