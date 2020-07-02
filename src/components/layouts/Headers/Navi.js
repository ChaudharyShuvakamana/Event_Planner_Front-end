import Axios from 'axios'
import React from 'react'
import {Link, Redirect} from "react-router-dom";

class Navi extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      
      collapsed: true,
      loadingprogress : 0
     
    }
}


toggleCollapse(){
    const collapsed = !this.state.collapsed;

    this.setState({collapsed : collapsed});
}

setRedirect(){
    this.setState({
      redirect : true,
    })
  }
  handleRedirect(){
    if(this.state.redirect){
      return <Redirect to='/vendorlogin' />
    }
  }

  componentWillReceiveProps(nextProp) {
    
    if(nextProp.load != this.state.loadingprogress){
        this.setState({
          loadingprogress : nextProp.load,
            
        })
    }

}


// Logout function
handleLogout(){


  var token   = sessionStorage.getItem("vendor_token");

  var config = {
     headers : {
       'Authorization' : token
     }
   }


   Axios.get("http://localhost:3000/api/auth/vendorlogout", config).then((res) => {
     if(res.data.success) {
      sessionStorage.clear('vendor_token');
    sessionStorage.clear('vendor_name');
    sessionStorage.clear('vendor_email');
    this.setRedirect();

     }
   })
  
  }

  complete = () => {
    this.setState({ loadingprogress: 100 });
  };
 
  onLoaderFinished = () => {
    this.setState({ loadingprogress: 0 });
  };
 


       render(){
        const collapsed = this.state.collapsed;
        const navClass = collapsed ? "collapse" : "";
        const vendor_name = sessionStorage.getItem("vendor_name");
        return(


<div className="col-md-3">
<div className="box box-solid">
  <div className="box-header with-border">
    <h3 className="box-title">Welcome, <i>{vendor_name}</i> <b></b></h3>
  </div>
  <div className="box-body no-padding">
    <ul className="nav nav-pills nav-stacked">
    <li><a href="addvenues"><i className="fa fa-home"></i> Add venues</a></li>
      <li><a href="Editprofile"><i className="fa fa-user"></i> Edit Profile</a></li>
      <li><a href="addBusiness"><i className="fa fa-briefcase"></i> Add Business</a></li>
      <li><a href="businesslist"><i className="fa fa-list"></i> Business list</a></li>
      <li><a href="venuelist"><i className="fa fa-th-list"></i> Venue list</a></li>
      <li><Link onClick = {this.handleLogout.bind(this)} to = "" className = "nav-link"><i className="fa fa-arrow-circle-o-right"></i> Logout</Link></li>

    </ul>
  </div>
</div>
</div>
         
         )
        }
        
 
 }
 export default Navi