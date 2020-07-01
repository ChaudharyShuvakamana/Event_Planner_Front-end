import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../../layouts/Headers/Navi';
import Nav from "../Headers";

class Vendor extends React.Component{

   render(){

        return(
          <div>
            <Nav />
            <div className="content-wrapper">
            <section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
   <Navi />

    </div>
    </div>
        </section>
  </div>
  </div>
          )
        }
        
 
 }
 export default Vendor

