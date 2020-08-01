import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../components/User/UserNavi';
import '../css/Table.css'
import {NavLink} from 'react-router-dom'

class Bvenuebooklist extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      singlebvenue: {},
      name: '',
      post: [],
      user: {},
      fullname: '',
      number: '',
      address: '',
      email: '',
      description:'',
      test: 'ssssssssssss',
      eventname: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/userlogincheck', this.state.config)
      .then((response) => {
        //alert(response.data._id);
        this.setState({
          id: response.data._id,
          user: response.data,
          name: response.data.name,
          email: response.data.email,
          number: response.data.number,
        })
        //alert(response.data._id)
        axios.get('http://localhost:3000/getbvenuebypostid/' + response.data._id, this.state.config)
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

    axios.get(`http://localhost:3000/singlebvenue/${id}`).then((response) => {
      // console.log(response);
      //alert(response.data.singlebvenue.user_id)
      this.setState({
        singlebvenue: response.data,
        fullname: response.data.singlebvenue.fullname,
        address: response.data.singlebvenue.address,
        number: response.data.singlebvenue.number,
        email: response.data.singlebvenue.email,
        eventname:response.data.singlebvenue.eventname,
        from: response.data.singlebvenue.from,
        to:response.data.singlebvenue.to,
        

        id: response.data.singlebvenue._id,
      });

    })
  }

  
  handledelete(id, index) {
    axios.delete("http://localhost:3000/delete/bvenuelist/" + id).then((res) => {
      this.state.post.splice();
      window.location.reload();
    })
  }
  

  UpdateData = () => {
    // alert(this.state.id)
    const data = {

      fullname: this.state.fullname,
      address: this.state.address,
      number: this.state.number,
      email: this.state.email,
      eventname: this.state.eventname,
      from: this.state.from,
      to:this.state.to

    }

    console.log(this.state.singlebvenue.fullname);
    axios.put("http://localhost:3000/updatebvenue/" + this.state.id, data).then(
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
    <th>Full name</th>   
    <th>Address</th>
    <th>Number</th>
    <th>Email</th>
    <th>Event Name</th>
    <th>From</th>
    <th>To</th>

  </tr>
              
  <tr >

   <td>{post.fullname}</td>
    <td>{post.address}</td>
    <td>{post.number}</td>
    <td>{post.email}</td>
     <td>{post.eventname}</td>
     <td>{post.from}</td>
    <td>{post.to}</td>


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
            <h3>Update venue booklist</h3>
            <label>full name</label>
            <input className="form-control" type="text" name='fullname' placeholder="fullname" value={this.state.fullname} onChange={(event) => this.setState({ fullname: event.target.value })} /><br />
            <label>Address</label>
            <input className="form-control" type="text" name='address' placeholder="address" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} /><br />
            <label>Number</label>
            <input className="form-control" type="text" name='number' placeholder="number" value={this.state.number} onChange={(event) => this.setState({ number: event.target.value })} /><br />
            <label>Email</label>
            <input className="form-control" type="text" name='email' placeholder="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} /><br />
            <label>Event name</label>
            <input className="form-control" type="text" name='eventname' placeholder="eventname" value={this.state.eventname} onChange={(event) => this.setState({ eventname: event.target.value })} /><br />
            <label>From</label>
            <input className="form-control" type="date" name='from' placeholder="from" value={this.state.from} onChange={(event) => this.setState({ from: event.target.value })} /><br />
            <label>To</label>
            <input className="form-control" type="date" name='to' placeholder="to" value={this.state.to} onChange={(event) => this.setState({ to: event.target.value })} /><br />
            

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

                      <h3 className="mb-3 color-blue"><b>User venue booklist</b></h3>
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
export default Bvenuebooklist