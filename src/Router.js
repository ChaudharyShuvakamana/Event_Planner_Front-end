import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/Home'
import Signup from './container/signuppg'
import Login from './container/loginpg'
import Usersign from './container/User/Usersign'
import Vendorsign from './container/Vendor/Vendorsign'
import Adminsign from './container/Admin/Adminsign'
import Userlogn from'./container/User/Userlogn'
import Vendorlogn from'./container/Vendor/Vendorlogn'
import venue from'./container/Vendor/Registervenue'
import venuelist from'./container/Vendor/Venueslist'
import Business from'./container/Vendor/Businessregister'
import Businesslist from'./container/Vendor/Businesslist'
import Adminlogn from'./container/Admin/Adminlogn'

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
                <Route exact path="/Userlogin" component={Userlogn}/>
                <Route exact path="/Vendorlogin" component={Vendorlogn}/>
                <Route exact path="/Adminlogin" component={Adminlogn}/>
                <Route exact path="/addvenue" component={venue}/>
                <Route exact path="/venuelist" component={venuelist}/>
                <Route exact path="/addBusiness" component={Business}/>
                <Route exact path="/Businesslist" component={Businesslist}/>
                
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;