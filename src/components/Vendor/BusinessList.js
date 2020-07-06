import React from 'react'
import Navi from '../../components/layouts/Headers/Navi';
import Nav from "../Headers";
import { Link } from 'react-router-dom'
import axios from 'axios';


export default class BusinessList extends React.Component{

    constructor(){
        super();

        this.state = {
            businessarray : [],
            loadingProgress : 0
        }
    }

    componentDidMount(){

        var token = sessionStorage.getItem("vendor_token");
        var config  = {
            headers: {
                'Authorization': token,
              }
        }
        axios.get("http://localhost:3000/api/vendor/business/getBusinessByVendor", config).then((business) => {
            this.setState({
                businessarray : business.data.business,
                loadingProgress : 100
            })
        });

    }

    render(){
        var businessarray = this.state.businessarray;
        if(businessarray != null){
            var data = businessarray.map(function(value, index){
                return(
            <div className = "col-md-4 mt-3" key = {index}>
                        <Link to = {"showbusiness/" + value._id}>    <div className = "venues">
                           <div className = "overlay">
                           <img src = {"http://localhost:3000/public/images/" + value.businessImage } width="200px" height="100px" className = "venues-img" />
                           
                           
                               <div className = "venue-details">
                                    <h4 className = "text-left">{value.businessname}</h4>
                               </div>
                               </div>
                       </div>
                       </Link>
               </div>
                )
          
    
            });
        }
        return(
            <div>
                     <Nav />
            <div className="content-wrapper">
            <section id="candidates" className="content-header">
  <div className="container">
    <div className="row"></div>
                <Navi load = {this.state.loadingProgress}/>
                <div className="col-md-9 bg-white padding-2">
                 <div className = "container-fluid mt-5">
                    <Link to = "addBusiness" ><button className = "btn btn-success mt-5"><span className = "fa fa-plus"></span></button></Link>
                    <div className = "row">
                    <div className="row margin-top-20">
                    {data}
                    </div>
                
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