import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Navi from '../../components/layouts/Headers/Navi';
import Nav from "../Headers";
export default class VenuesList extends React.Component {

    constructor() {
        super();

        this.state = {
            venuesarray: [],
            loadingProgress: 0,
        }
    }

    componentDidMount() {

        var token = sessionStorage.getItem("vendor_token");

        var config = {
            headers: {
                'Authorization': token,
            }
        }

        axios.get("http://localhost:3000/api/vendor/venue/getVenuesByVendor", config).then((venues) => {
            this.setState({
                venuesarray: venues.data.venues,
                loadingProgress: 100
            })
        });


    }

    render() {
        var venuesarray = this.state.venuesarray;
        if (venuesarray != null) {
            var data = venuesarray.map(function (value, index) {
                return (

                    <div className="col-md-4 mt-3" key={index}>
                        <Link to={"showvenue/" + value._id}>    <div className="venues">
                            <div className="overlay">
                                <img src={"http://localhost:3000/public/images/" + value.image} width="200px" height="100px" className="venues-img" />


                                <div className="venue-details">
                                    <h4 className="text-left">{value.venueName}</h4>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>

                )


            });
        }


        return (
            <div>
            <Nav />
   <div className="content-wrapper">
   <section id="candidates" className="content-header">
<div className="container">
<div className="row"></div>
       <Navi load = {this.state.loadingProgress}/>
       <div className="col-md-9 bg-white padding-2">
        <div className = "container-fluid mt-5">
           <Link to = "addvenue" ><button className = "btn btn-success mt-5"><span className = "fa fa-plus"></span></button></Link>
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