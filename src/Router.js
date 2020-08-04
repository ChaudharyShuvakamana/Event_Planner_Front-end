import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Home from './container/Home'

import Venue from './container/Venue'
import Myvenue from './container/Myvenue';

import Business from './container/Business'
import Mybusiness from './container/Mybusiness';
import Venuebookedlist from './container/bvenuebooklist';
import Businessbookedlist from './container/bbusinessbooklist';


import login from './container/Login'
import signup from './container/Signup'
import userlogin from './container/User/Userlogin'
import usersignup from './container/User/Usersignup'


import EditUser from './container/User/Updateprofile'


import Signupg from './container/signuppg'
import Loging from './container/loginpg'
import Editprofile from './container/Vendor/Updateuser'
import Blog from './container/Blog'
import Newsfeed from './container/Newsfeed'
import Mypost from './container/Mypost';

import Bookingvenue from './container/Bookingvenue'
import Bookingbusiness from './container/Bookingbusiness'

import AdminDashboard from './container/Admin/AdminDashboard';
import Adminprofilee from './container/Admin/Adminprofilee';
import UserDetails from './container/Admin/UserDetails';
import VenueDetails from './container/Admin/Venuedetails';
import BusinessDetails from './container/Admin/Businessdetails';
import PostDetails from './container/Admin/PostDetails';
import BvenueDetails from './container/Admin/Bvenuedetails';
import BbusinessDetails from './container/Admin/Bbusinessdetails';


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
                    <Route path="/Venuebookedlist" exact component={Venuebookedlist} />
                    <Route path="/Businessbookedlist" exact component={Businessbookedlist} />
                    
                    <Route path="/Edituser" exact component={EditUser} />
                    <Route path="/Bookingvenue" exact component={Bookingvenue} />
                    <Route path="/Bookingbusiness" exact component={Bookingbusiness} />
                    
                    <Route exact path="/Blog" component={Blog} />
                    <Route exact path="/Newsfeed" component={Newsfeed} />
                    <Route exact path="/Mypost" component={Mypost} />

                    <Route exact path ="/AdminDashboard" component={AdminDashboard}/>
                    <Route exact path ="/Adminprofilee" component={Adminprofilee}/>
                    <Route exact path ="/UserDetails" component={UserDetails}/>
                    <Route exact path ="/VenueDetails" component={VenueDetails}/>
                    <Route exact path ="/BusinessDetails" component={BusinessDetails}/>
                    <Route exact path ="/Postdetails" component={PostDetails}/>
                    <Route exact path ="/Bvenuedetails" component={BvenueDetails}/>
                    <Route exact path ="/Bbusinessdetails" component={BbusinessDetails}/>

                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;