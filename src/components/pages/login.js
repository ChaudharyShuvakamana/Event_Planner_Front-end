import React from 'react'
import Nav from "../pages/Header";

class Login extends React.Component{

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
              <h3 className="text-center">User Login</h3>
            </div>
            <a href="Userlogin" className="small-box-footer">
              Login <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-green padding-5">
            <div className="inner">
              <h3 className="text-center">Vendor Login</h3>
            </div>
            <a href="Vendorlogin" className="small-box-footer">
              Login <i class="fa fa-arrow-circle-right"></i>
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
 export default Login
