import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/home'
import Signup from './container/signuppg'
import Login from './container/loginpg'
import Usersign from './container/User/Usersign'
import Vendorsign from './container/Vendor/Vendorsign'
import Adminsign from './container/Admin/Adminsign'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Usersign" component={Usersign}/>
                <Route exact path="/Vendorsign" component={Vendorsign}/>
                <Route exact path="/Adminsign" component={Adminsign}/>
                
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;