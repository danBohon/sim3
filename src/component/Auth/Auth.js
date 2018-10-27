import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import { userLogin } from '../../ducks/reducer';

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleNameInput = (val) => {
    this.setState({username: val});
  }
  handlePassInput = (val) => {
    this.setState({password: val});
  }

  registerUser = (username, password) => {
    axios.post( '/api/register', {username, password}).then( () => this.loginUser(username, password))
  }

  loginUser = (username, password) => {
    axios.post( '/api/login', {username, password}).then( res => {
      this.props.userLogin(res.data[0].username, res.data[0].id, res.data[0].profile_pic);
    })
  }

  render() {
    const {username, password} = this.state;
    return (
      <div>
        <input onChange={ e => this.handleNameInput(e.target.value) } 
        value={this.state.username} type="text" placeholder="Username"/>

        <input onChange={ e => this.handlePassInput(e.target.value) } 
        value={this.state.password} type="text" placeholder="Password"/>

         <Link onClick={() => this.loginUser(username, password)}to="/dashboard"><button>Login</button></Link>
         <Link onClick={() => this.registerUser(username, password)}to="/dashboard"><button>Register</button></Link>
      </div>
    )
  }
}

export default connect(null, {userLogin} )(Auth)
