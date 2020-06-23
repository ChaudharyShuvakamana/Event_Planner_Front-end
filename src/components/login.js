import React from 'react'


class Login extends React.Component{

   render(){

        return(
<div className="content-wrapper">

  <section className="content-header">
    <div className="container">
        <h1 className="text-center">LOGIN</h1>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-yellow padding-5">
            <div className="inner">
              <h3 className="text-center">User Login</h3>
            </div>
            <a href="Userlogin" className="small-box-footer">
              Login <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-red padding-5">
            <div className="inner">
              <h3 className="text-center">Vendor Login</h3>
            </div>
            <a href="Vendorlogin" className="small-box-footer">
              Login <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
  </section>
  </div>
          )
        }
        
 
 }
 export default Login
