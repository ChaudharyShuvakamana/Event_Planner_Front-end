
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/User/auth/Userlogin';
import Signup from '../pages/User/auth/Usersignup';
import FLogin from '../pages/login';
import FSignup from '../pages/signup';
import Vendor from "../pages/Vendor/vendor";
import VendorsLogin from "../pages/Vendor/auth/Vendorlogin";
import VendorSignup from "../pages/Vendor/auth/Vendorsignup";
// import RegisterVenue from '../pages/Vendor/Venues/RegisterVenue';
import Ven from '../pages/Vendor/Venues/RegisterVenues';
import Bus from '../pages/Vendor/Business/BusinessRegisters';

export default class Routes extends React.Component {

    loggedIn() {

        if (sessionStorage.getItem('user_token') == null) {
            return false;
        }
        return true;
    }

    vendorLoggedIn() {
        if (sessionStorage.getItem('vendor_token') == null) {
            return false;
        }
        return true;
    }



    render() {

        return (

            //Main Routes
            <BrowserRouter>

                <Switch>

                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/navlogin" component={FLogin} />
                    <Route exact path="/navsignup" component={FSignup} />
                    <Route exact path="/Vendors" component={Vendor} />
                    
                    <Route exact path="/addvenues" component={Ven} />

                    <Route path="/addBusiness" component={Bus} />

                    {/* If else condition to rediect if user is logged in or not logged in */}

                    <Route path="/Userlogin" render={() => (
                        this.loggedIn() == false ? (<Login />) : (<Redirect to="/profile" />)
                    )} />
                    <Route path="/Usersign" render={() => (
                        this.loggedIn() == false ? (<Signup />) : (<Redirect to="/profile" />)
                    )} />

                    <Route path="/vendorlogin" render={() => (
                        this.vendorLoggedIn() == false ? (<VendorsLogin />) : (<Redirect to="/vendors/" />)
                    )} />

                    <Route path="/vendorsign" render={() => (
                        this.vendorLoggedIn() == false ? (<VendorSignup />) : (<Redirect to="/vendor/" />)
                    )} />


                    {/* Vendor Routes for type business */}
{/* 
                    <Route path="/vendor/" render={({ location, history }) => (
                        this.vendorLoggedIn() == false ? (<Redirect to="/vendorlogin" />) : <React.Fragment>
                      
                            {

                                (sessionStorage.getItem('vendor_type') == "Professional") ?

                                    <main id="content-wrapper" className="content-wrapper">

                            
                                        <Route path="/vendor/addBusiness" component={props => <BusinessRegister />} />
                 

                                    </main>

                                    :


                                    //Vendor routes type venues
                                    <Route path="/addvenues" render={() => (
                                        this.vendorLoggedIn() == false ? (<Ven />) : (<Redirect to="/vendor/" />)
                                    )} />
                            }
                        </React.Fragment>

                    )}
                    /> */}

                </Switch>
            </BrowserRouter>

        )
    }
}