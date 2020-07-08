import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Home from './container/Home'

import Venue from './container/Venue'
import Myvenue from './container/Myvenue';

import Business from './container/Business'
import Mybusiness from './container/Mybusiness';


import login from './container/Login'
import signup from './container/Signup'
import Signupg from './container/signuppg'
import Loging from './container/loginpg'
import Editprofile from './container/Vendor/Updateuser'


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Venue" component={Venue} />
                    <Route exact path="/Myvenue" component={Myvenue} />
                    <Route exact path="/navlogin" component={Loging} />
                    <Route exact path="/navsignup" component={Signupg} />
                    <Route exact path="/Business" component={Business} />
                    <Route exact path="/Mybusiness" component={Mybusiness} />
                    <Route path="/Login" exact component={login} />
                    <Route path="/Signup" exact component={signup} />
                    <Route path="/Edituser" exact component={Editprofile} />
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;