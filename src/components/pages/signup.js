import React from 'react'
import Nav from "../pages/Header";

class Signup extends React.Component{

   render(){

        return(
          <div>
            <Nav />
            <div className="content-wrapper">

<section className="content-header">
<div className="container">
  <br />
  <br />
<div class="row latest-job margin-top-50 margin-bottom-20">
<div className="col-md-6 latest-job ">
          <div className="small-box bg-yellow padding-5">
            <div className="inner">
              <h3 className="text-center">User Registration</h3>
            </div>
            <a href="Usersign" className="small-box-footer">
              Register <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-green padding-5">
            <div className="inner">
              <h3 className="text-center">Vendor Registration</h3>
            </div>
            <a href="Vendorsign" className="small-box-footer">
              Register <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        </div>
    </div>
        </section>
  </div>
  </div>
          )
        }
        
 
 }
 export default Signup
