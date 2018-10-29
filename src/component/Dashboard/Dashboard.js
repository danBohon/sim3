import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      myPosts: true,
      posts: []
     }
  }

  handleCheckChange = (_) => {
    this.setState( { myPosts: !this.state.myPosts } )    
  }

  render() {
    console.log('-----checked----->after', this.state.myPosts);

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
        <input value={this.state.search} onChange={e => this.setState({search: e.target.value})} placeholder='Search by Title'/>
        <button>Search</button>
        <button>Reset</button>
        <label>
          My Posts:
          <input type='checkbox' checked={this.state.myPosts} onChange={this.handleCheckChange}/>
        </label>
      </div>
    )
  }
}
