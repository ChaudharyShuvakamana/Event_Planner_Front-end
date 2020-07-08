import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../components/Navi';
import '../css/Table.css'
import {NavLink} from 'react-router-dom'

class Myvenuepage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      singleFeed: {},
      post_venuetype: '',
      profileimage: '',
      name: '',
      post: [],
      user: {},
      venuename: '',
      phone: '',
      address: '',
      email: '',
      description:'',
      test: 'ssssssssssss',
      venuetype: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
      .then((response) => {
        //alert(response.data._id);
        this.setState({
          id: response.data._id,
          user: response.data,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
        })
        //alert(response.data._id)
        axios.get('http://localhost:3000/findpostbyuserid/' + response.data._id, this.state.config)
          .then((response) => {
            console.log(response.data)
            this.setState({ post: response.data })


          })

      })
  }

  updateFeed = (id) => {
    // console.log('hit');
    // console.log(id);
    //alert(id)

    axios.get(`http://localhost:3000/singleFeed/${id}`).then((response) => {
      // console.log(response);
      //alert(response.data.singleFeed.user_id)
      this.setState({
        singleFeed: response.data,
        venuename: response.data.singleFeed.venuename,
        venuetype: response.data.singleFeed.venuetype,
        phone: response.data.singleFeed.phone,
        address: response.data.singleFeed.address,
        email: response.data.singleFeed.email,
        description:response.data.singleFeed.description,

        id: response.data.singleFeed._id,
      });

    })
  }

  handledelete(id, index) {
    axios.delete("http://localhost:3000/deletepost/" + id).then((res) => {
      this.state.post.splice();
      window.location.reload();
    })
  }

  UpdateData = () => {
    // alert(this.state.id)
    const data = {

      venuename: this.state.venuename,
      venuetype: this.state.venuetype,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      description:this.state.description

    }

    console.log(this.state.singleFeed.venuename);
    axios.put("http://localhost:3000/postupdate/" + this.state.id, data).then(
      setTimeout(function () {
        alert("Successfully updated");
        window.location.reload();
      }, 1000)
    )
  }

  handlechange = (e) => {
    this.setState(

      { [e.target.name]: e.target.value }
    )
  }





  render() {
    //post design foreach loop
    const photoblog = this.state.post.map((post) => {
      return (
        <div className='row post'>

<table id="customers">
                  
                  <tr>
    <th>Venue Image</th>               
    <th>venue Name</th>
    <th>venue Type</th>
    <th>Phone</th>
    <th>Address </th>
    <th>Email</th>
    <th>Description</th>
  </tr>
              
  <tr >
  <img src={"http://localhost:3000/image/" + post.image} style = {{width : "80px" , marginLeft:"5px", height: "80px"}}/>
   <td>{post.venuename}</td>
    <td>{post.venuetype}</td>
    <td>{post.phone}</td>
    <td>{post.address}</td>
    <td>{post.email}</td>
     <td>{post.description}</td>
     


  </tr>
           </table>
          <div className="pull-right">
            <button type="button" className="btn btn-primary" onClick={this.deletepost} style={{ marginRight: 10, marginTop: 15 }} onClick={() => this.handledelete(post._id)}> <i className="fa fa-times" ></i> Delete </button>
          </div>
          <div className="pull-left">

            <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} data-toggle="modal" onClick={() => this.updateFeed(post._id)} data-target="#myModal"> <i className="fa fa-comment" ></i> Update</button>
            <div id="myModal" class="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <form >
                      <div className="form-group">
                        <h3>Update venue</h3>
                        <label>Venue name</label>
                        <input className="form-control" type="text" name='venuename' placeholder="venuename" value={this.state.venuename} onChange={(event) => this.setState({ venuename: event.target.value })} /><br />
                        <label>Venue type</label>
                        <input className="form-control" type="text" name='venuetype' placeholder="venuetype" value={this.state.venuetype} onChange={(event) => this.setState({ venuetype: event.target.value })} /><br />
                        <label>Phone</label>
                        <input className="form-control" type="text" name='phone' placeholder="phone" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} /><br />
                        <label>Venue address</label>
                        <input className="form-control" type="text" name='address' placeholder="address" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} /><br />
                        <label>Email</label>
                        <input className="form-control" type="text" name='email' placeholder="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} /><br />

                      </div>
                    </form>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={this.UpdateData}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div>

        <div className="content-wrapper" style={{ marginleft: "0 px" }}>


          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
                <Navi />
                <div className="col-md-9 bg-white padding-2">
                  <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                    <div className="col-md-12">

                      <h3 className="mb-3 color-blue"><b>User venues</b></h3>
                      {photoblog}

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
export default Myvenuepage