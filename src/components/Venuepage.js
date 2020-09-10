import React from 'react'
import axios from 'axios'
import Navi from '../components/Navi';


class Venuepage extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            image: "",
            venuename: "",
            venuetype: "",
            phone: "",
            address: "",
            email: "",
            description: "",
            success: "",
            error: "",
            config: {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    id: response.data._id
                })

            })
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };


    postdata = (e) => {
        e.preventDefault();
        let postdata = new FormData();
        postdata.append('user_id', this.state.id);
        postdata.append('image', this.state.image, this.state.image.name);
        postdata.append('venuename', this.state.venuename);
        postdata.append('venuetype', this.state.venuetype);
        postdata.append('phone', this.state.phone);
        postdata.append('address', this.state.address);
        postdata.append('email', this.state.email);
        postdata.append('description', this.state.description);
        axios.post('http://localhost:3000/createpost', postdata, this.state.config)
            .then(response => {
                console.log(response.data.successmsg)
                // window.location.reload();
                this.setState({
                    success: response.data.successmsg
                });
                setTimeout(function () {
                    window.location.reload()
                    alert("Successfully Uploaded");
                }, 1000);
            })
            .catch(error => {
                this.setState({
                    error: "Something went wrong. Try again!"
                })
                console.log(error.response.data.errmsg)
            })
    }




    render() {

        return (
            <div>
                <div className="content-wrapper">
                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">
                                <Navi />

                                <div className="col-md-9 bg-white padding-2">
                                    <form className="form validate-form flex-sb flex-w">


                                        <div className="box-header with-border">
                                            <h2 className="box-title">Add new Venues</h2>
                                        </div>
                                        <div className="box-body">
                                            <div className="container-fluid">
                                                <div className="form-group">
                                                    <input className="form-control input-lg" id="venuename" ref="venuename" name="venuename" placeholder="Enter venue Name" value={this.state.venuename} onChange={this.handleChange} />

                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control input-lg" id="venuetype" ref="venuetype" name="venuetype" placeholder="Enter venue type" value={this.state.venuetype} onChange={this.handleChange} />

                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control input-lg" id="phone" ref="phone" name="phone" placeholder="Enter phone number" value={this.state.phone} onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control input-lg" id="address" ref="address" name="address" placeholder="Enter Address" value={this.state.address} onChange={this.handleChange} />

                                                </div>


                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <input className="form-control input-lg" id="email" ref="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />

                                                    </div>

                                                </div>

                                                <div className="form-group ">
                                                    <textarea name="description" name="description" className="form-control" rows="4" cols="50" value={this.state.description} onChange={this.handleChange}></textarea>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="container-fluid">
                                            <input type="file" name="image" onChange={this.handleImageChange}
                                                id="image" className="form-control" />
                                            <div className="preview-div">

                                            </div>
                                            <div className="box-footer">
                                                <div className="pull-right">
                                                    <button type="submit" id="venue" onClick={this.postdata} className="btn btn-primary" ><i className="fa fa-envelope-o"></i> Post</button>
                                                </div>
                                                <a href="#" className="btn btn-primary"><i className="fa fa-times"></i> Discard</a>
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
export default Venuepage