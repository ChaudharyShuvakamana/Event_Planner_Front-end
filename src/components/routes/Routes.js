  
import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
 import HomePage from '../pages/HomePage';
 import Login from '../pages/User/auth/Userlogin';
 import Signup from '../pages/User/auth/Usersignup';
 import FLogin from '../pages/login';
 import FSignup from '../pages/signup';
import VendorsLogin from "../pages/Vendor/auth/Vendorlogin";
import VendorSignup from "../pages/Vendor/auth/Vendorsignup";
import RegisterVenue from '../pages/Vendor/Venues/RegisterVenue';
 

export default class Routes extends React.Component{

    loggedIn(){
      
      if(sessionStorage.getItem('user_token') == null){
          return false;
      }
        return true; 
   }

   vendorLoggedIn(){
      if(sessionStorage.getItem('vendor_token') == null){
          return false;
      }
        return true; 
   }

   

      render(){

          return (
           
                    //Main Routes
              <BrowserRouter>

           <Switch>
               
               <Route exact path = "/" component = {HomePage} />
               <Route exact path = "/navlogin" component = {FLogin} />
               <Route exact path = "/navsignup" component = {FSignup} />

               {/* If else condition to rediect if user is logged in or not logged in */}

               <Route path = "/Userlogin"   render={() => (
                   this.loggedIn() == false ? ( <Login /> ) : (<Redirect to = "/profile" />  )
               )}/>
              <Route path = "/Usersign"   render={() => (
                   this.loggedIn() == false ? ( <Signup /> ) : (<Redirect to = "/profile" />  )
               )}/>
              
           <Route path = "/vendorlogin" render={() => (
                   this.vendorLoggedIn() == false ? ( <VendorsLogin />  ) : (<Redirect to = "/vendor/" />)
               )}/>
               
           <Route path = "/vendorsign" render={() => (
                   this.vendorLoggedIn() == false ? ( <VendorSignup />  ) : (<Redirect to = "/vendor/" />)
               )}/>
             
            
               <Route path = "/vendor/" render={({ location, history }) => (
                      this.vendorLoggedIn() == false ? ( <Redirect to = "/" /> ) :  <React.Fragment>
                      {
                            
                          (sessionStorage.getItem('vendor_type') == "Professional") ?
                          
                        <main id = "wrapper" className = "wrapper">
                            
                  

                    </main>

                    :
                    

                  //Vendor routes type venues
                    <main id = "wrapper" className = "wrapper">
                          
                    <Route path="/vendor/addvenues" component={props => <RegisterVenue />} />

                </main>
                      }
           </React.Fragment>
             
 )}
 />
            
           </Switch>
           </BrowserRouter>
        
          )
      }
}