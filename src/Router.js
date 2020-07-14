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
import userlogin from './container/User/Userlogin'
import usersignup from './container/User/Usersignup'
import EditUser from './container/User/Updateprofile'

import Signupg from './container/signuppg'
import Loging from './container/loginpg'
import Editprofile from './container/Vendor/Updateuser'

import Bookingvenue from './container/Bookingvenue'
import Bookingbusiness from './container/Bookingbusiness'


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
                    <Route path="/Userlogin" exact component={userlogin} />
                    <Route path="/Usersignup" exact component={usersignup} />
                    <Route path="/Editvendor" exact component={Editprofile} />
                    
                    <Route path="/Edituser" exact component={EditUser} />
                    <Route path="/Bookingvenue" exact component={Bookingvenue} />
                    <Route path="/Bookingbusiness" exact component={Bookingbusiness} />
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;