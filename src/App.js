import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes'
import {withRouter} from 'react-router-dom';


class App extends Component {
  render() {
    console.log('this.props', this.props);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Nav
          pathname={this.props.location.pathname}/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
