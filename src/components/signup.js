import React from 'react'
class Signup extends React.Component{

   render(){

        return(
<div className="content-wrapper">

  <section className="content-header">
    <div className="container">
        <h1 className="text-center">Sign Up</h1>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-yellow padding-5">
            <div className="inner">
              <h3 className="text-center">User Registration</h3>
            </div>
            <a href="Usersign" className="small-box-footer">
              Register <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 latest-job ">
          <div className="small-box bg-red padding-5">
            <div className="inner">
              <h3 className="text-center">Vendor Registration</h3>
            </div>
            <a href="Vendorsign" className="small-box-footer">
              Register <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
  </section>

  

</div>
        )
        }
      

}
export default Signup