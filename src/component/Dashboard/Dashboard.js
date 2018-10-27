import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      myPosts: true,
      posts: []
     }
  }

  handleCheckChange = () => {
    this.setState( { myPosts: false} )
  }

  render() {
    const posts = this.state.posts.map(
      post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.username}</h3>
            <img src={post.img} alt="Post"/>
          </div>
        )
      }
    )
    return (
      <div>
        <button>Search</button>
        <button>Reset</button>
        <label>
          My Posts:
          <input type="checkbox" onChange={this.handleCheckChange}/>
        </label>
      </div>
    )
  }
}
