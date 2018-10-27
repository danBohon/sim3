import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes'
// import { Auth } from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
