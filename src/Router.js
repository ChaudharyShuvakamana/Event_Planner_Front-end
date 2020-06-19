import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/Home'
import Signup from './container/Signup'
import AdminSignup from './container/AdminSignup'
import VendorSignup from './container/VendorSignup'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/vendor/Signup" component={VendorSignup} />
                <Route exact path="/admin/Signup" component={AdminSignup} />
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;