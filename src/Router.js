import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/Home'
import Signup from './container/Signup'
import VendorSignup from './container/VendorSignup'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/vendor/Signup" component={VendorSignup} />
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;