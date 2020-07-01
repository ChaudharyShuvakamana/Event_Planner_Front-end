import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../../../layouts/Headers/Navi';
import Nav from "../../Headers";
import Map from "../../Map";

class RegisterVenues extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location : {
                address: "Nagpokhari Marg 390, Kathmandu 44600, Nepal",
                lat : "27.717245",
                lng : "85.323961"
            },
            image : "",
            redirect : false,
        }
      
    }
    setRedirect(){
        this.setState({
            redirect : true
        })
    }

    handleRedirect(){
        if(this.state.redirect){
            return <Redirect to='/vendor/home' />
        }
    }

    handleLocationChange(location){
        this.setState({
            location : location
        })
    }

    handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

       var name = this.refs.vname.value;
       var type = this.refs.vtype.value;
       var desc = this.refs.vdesc.value;
       var contact = this.refs.vcontact.value;
       var indoor = this.refs.vin.value;
       var outdoor = this.refs.vout.value; 
       var veg = this.refs.veg.value;
       var  nonVeg =this.refs.nonveg.value;
       var  address  = this.refs.address.value;
       var  lat = this.refs.lat.value;
       var  lng  = this.refs.lng.value;
      
      
             
       

         var image = this.refs.venueimage.files[0];

         
         formData.append("name", name);
         formData.append("type", type);
         formData.append("desc", desc);
         formData.append("contact", contact);
         formData.append("indoor", indoor);
         formData.append("outdoor", outdoor);
         formData.append("veg", veg);
         formData.append("nonVeg", nonVeg);
         formData.append("address", address);
         formData.append("lat", lat);
         formData.append("lng", lng);
         formData.append("image", image);
        

    
        var token = sessionStorage.getItem("vendor_token");
       
        var config  = {
            headers: {
                'Accept' : 'multipart/form-data',
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': token,
              }
        }

 
      axios.post("http://localhost:3000/api/addVenue", formData, config).then((res) => {
        console.log(res);
        window.location.reload()
       this.setRedirect();
     });

     
    }


    handleImageChange(e){
        if (e.target.files && e.target.files[0]) {
            this.setState({
              image: URL.createObjectURL(e.target.files[0])
            });
          }else{
            this.setState({
                image: ""
              });
          }
    }
   render(){

        return(
          <div>
            <Nav />
            <div className="content-wrapper">
            <section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
   <Navi />
   
   <div className="col-md-9 bg-white padding-2">
   <form onSubmit = {this.handleSubmit.bind(this)}>
    
          <div className="box-header with-border">
            <h3 className="box-title">Add new Venues</h3>
          </div>
          <div className="box-body">
          <div className = "container-fluid">
                
                <div className = "form-group">
                <input type = "text" placeholder = "Venue Name" ref = "vname" className = "form-control"></input>
                </div>
                <div className = "form-group">
              
                    <select className = "form-control" ref = "vtype">
                        <option>Resort</option>
                        <option>Hotel</option>
                    </select>
                </div>
                <div className = "form-group">
                <textarea type = "text" placeholder = "Venue Description" ref = "vdesc" className = "form-control"></textarea>

                </div>
                <div className = "form-group">
                <input type = "number" placeholder = "Venue Contact" ref = "vcontact" className = "form-control"></input>

                </div>
                <div className = "form-group">
                <input type = "hidden" value = {this.state.location.address} ref = "address" className = "form-control"></input>
                </div>
                <div className = "form-group">
                <input type = "hidden" value = {this.state.location.lat} ref = "lat" className = "form-control"></input>
                </div>
                <div className = "form-group">
                <input type = "hidden" value = {this.state.location.lng} ref = "lng" className = "form-control"></input>
                </div>
            
                
                <div className = "form-group row">
                <div className = "col-md-6">
                <input type = "number" placeholder = "Indoor" ref = "vin" className = "form-control"></input>

                </div>
                <div className = "col-md-6">
                <input type = "number" placeholder = "Outdoor" ref = "vout" className = "form-control"></input>

                </div>
                </div>

                <div className = "form-group row">
                <div className = "col-md-6">
                <input type = "number" placeholder = "Veg" ref = "veg" className = "form-control"></input>

                </div>
                <div className = "col-md-6">
                <input type = "number" placeholder = "Non Veg" ref = "nonveg" className = "form-control"></input>

                </div>
                </div>
          
            </div>
            <div className = "container-fluid mb-8 ">
            
            <Map onLocationChange = {this.handleLocationChange.bind(this)} 
            google = {this.props.google}
            center = {{lat : 27.717245, lng : 85.323961}}
            height = '300px'
            zoom = {15}
            />
            
                            </div>
                            <br />
    
                            <div className = "container-fluid">
            <input type = "file" ref = "venueimage" onChange = {this.handleImageChange.bind(this)} className = "form-control"/>
            <div className = "preview-div">
            {/* <div className = "container-fluid mb-8 ">
        <img src = {this.state.image} className = {(this.state.image == "" ? "venue-img-preview d-none" : "venue-img-preview mt-3" )}/>
        
                 </div>       */}
                          </div>
                          <div className="box-footer">
            <div className="pull-right">
                    <button className = "btn btn-primary">Submit</button>
                    </div>
                    </div>
                    </div>
              </div>
          
          </form>
       </div>

    </div>
    </div>
        </section>
  </div>
  </div>
          )
        }
        
 
 }
 export default RegisterVenues

