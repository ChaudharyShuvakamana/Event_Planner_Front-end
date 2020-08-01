  import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Bookingvenuepage from '../components/Bookingvenuepage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'
class Bookingvenue extends React.Component{


    render(){
   
          return(
              <div>
                  <Header />
                  <Bookingvenuepage/>
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Bookingvenue