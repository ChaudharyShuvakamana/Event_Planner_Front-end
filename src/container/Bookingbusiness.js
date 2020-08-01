import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Bookingbusinesspage from '../components/Bookingbusinesspage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'
class Bookingbusiness extends React.Component{


    render(){
   
          return(
              <div>
                  <Header />
                  <Bookingbusinesspage/>
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Bookingbusiness