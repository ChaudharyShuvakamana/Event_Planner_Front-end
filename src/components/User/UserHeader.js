import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../../container/Home'


import login from '../../container/Login'
import Register from '../../container/Register'
import Signupg from '../../container/signuppg'
import Loging from '../../container/loginpg'
import Updateuser from '../../container/Vendor/Updateuser'
import Addvenue from '../../container/Vendor/Addvenue'
import Managevenue from '../../container/Vendor/Managevenue'
import Updatevenue from '../../container/Vendor/Updatevenue'

import Addbusiness from '../../container/Vendor/Addbusiness'
import Managebusiness from '../../container/Vendor/Managebusiness'

// import AdminHeader from '../Vendor/AdminHeader'
import Manageuser from '../Vendor/Manageuser'
import LogOut from '../Vendor/Logout'




class userHeader extends React.Component {
    render() {
        return (
            <div class="navbar">
                <Switch>
                    
                <Route exact path="/" component={Index} />
                    <Route exact path="/navlogin" component={Loging} />
                    <Route exact path="/navsignup" component={Signupg} />

                  <Route path="/Login" exact component={login} />
                    <Route path="/Register" exact component={Register} />
                    {/* <Route path="/Admin/AdminHeader/" exact component={AdminHeader} /> */}
                    <Route path="/Manageuser/:id" exact component={Manageuser} />
                    <Route path="/Updateuser/" exact component={Updateuser} />
                    <Route path="/Managevenue/" exact component={Managevenue} />
                    <Route path="/Addvenue/" exact component={Addvenue} />
                    <Route path="/Updatevenue/:id" exact component={Updatevenue} />
                    <Route path="/Logout" exact component={LogOut} />
                    <Route path="/Addbusiness/" exact component={Addbusiness} />
                    <Route path="/Managebusiness/" exact component={Managebusiness} />

                   
                    
                    
                    
                   
                </Switch>

            </div>


        )
    }


}
export default userHeader