import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../../components/layouts/Headers/Navi';
import Nav from "../Headers";

class RegisterVenues extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
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

    handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

       var name = this.refs.vname.value;
       var type = this.refs.vtype.value;
       var desc = this.refs.vdesc.value;
       var location = this.refs.location.value;
       var contact = this.refs.vcontact.value;
       var indoor = this.refs.vin.value;
       var outdoor = this.refs.vout.value; 
       var veg = this.refs.veg.value;
       var  nonVeg =this.refs.nonveg.value;
  
      
      
             
       

         var image = this.refs.venueimage.files[0];

         
         formData.append("name", name);
         formData.append("type", type);
         formData.append("desc", desc);
         formData.append("location", location);
         formData.append("contact", contact);
         formData.append("indoor", indoor);
         formData.append("outdoor", outdoor);
         formData.append("veg", veg);
         formData.append("nonVeg", nonVeg);
         formData.append("image", image);
        

    
        var token = sessionStorage.getItem("vendor_token");
       
        var config  = {
            headers: {
                'Accept' : 'multipart/form-data',
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': token,
              }
        }

 
      axios.post("http://localhost:3000/api/vendor/venue/addVenue", formData, config).then((res) => {
        console.log(res);
       this.setRedirect();
       window.location.reload();
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
 
    render() {

        return (
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
                                            <div className="container-fluid">

                                                <div className="form-group">
                                                    <input type="text" placeholder="Venue Name" ref="vname" className="form-control"></input>
                                                </div>
                                                <div className="form-group">

                                                    <select className="form-control" ref="vtype">
                                                        <option>Resort</option>
                                                        <option>Hotel</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <textarea type="text" placeholder="Venue Description" ref="vdesc" className="form-control"></textarea>

                                                </div>
                                                <div className="form-group">
                                               
                                               <select className="form-control" ref="location">
                                                      <option>Dharan</option>
                                                      <option>Kathmandu</option>
                                                      <option>Biratnagar</option>
                                                  </select>
                                              </div>
                                                <div className="form-group">
                                                    <input type="number" placeholder="Venue Contact" ref="vcontact" className="form-control"></input>

                                                </div>
                                             

                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <input type="number" placeholder="Indoor" ref="vin" className="form-control"></input>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="number" placeholder="Outdoor" ref="vout" className="form-control"></input>

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <input type="number" placeholder="Veg" ref="veg" className="form-control"></input>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="number" placeholder="Non Veg" ref="nonveg" className="form-control"></input>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="container-fluid mb-8 ">

                                             
                                            </div>

                                            <div className="container-fluid">
                                                <input type="file" ref="venueimage" onChange={this.handleImageChange.bind(this)} className="form-control" />
                                                <div className="preview-div">
                                                    <div className="container-fluid mb-8 ">
                                                        {/* <img src={this.state.image} className={(this.state.image == "" ? "venue-img-preview d-none" : "venue-img-preview mt-3")} /> */}

                                                    </div>
                                                </div>
                                                <div className="box-footer">
                                                    <div className="pull-right">
                                                        <button className="btn btn-primary">Submit</button>
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

