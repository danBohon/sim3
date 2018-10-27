import React from "react";
import {Switch, Route} from 'react-router-dom';
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Post from "./component/Post/Post";
import Auth from "./component/Auth/Auth";

export default

<Switch>
    <Route path='/dashboard' component={Dashboard}/> 
    <Route path='/post/:postid' component={Post}/> 
    <Route path='/new' component={Form}/> 
    <Route path='/' component={Auth}/> 
</Switch>