import React from 'react'
import axios from 'axios'
import Navi from '../components/User/UserNavi';


class Blogpage extends React.Component{
  constructor(){
    super();
    this.state={
      id:"",
      image:"",
      status : "",
      success:"",
      error:"",
        config: {
            headers: { 
                'content-type': 'multipart/form-data',
                'Authorization':`Bearer ${localStorage.getItem('token')}`}
        }
    }
}

componentDidMount(){
  axios.get('http://localhost:3000/userlogincheck',this.state.config)
  .then((response) => {
    this.setState({
      user: response.data,
      id:response.data._id
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


postdata = (e) =>{
  e.preventDefault();
  let postdata = new FormData();
  postdata.append('user_id', this.state.id);
  postdata.append('image', this.state.image, this.state.image.name);
  postdata.append('status', this.state.status);
  axios.post('http://localhost:3000/createblog', postdata, this.state.config)
    .then(response=> {
    console.log(response.data.successmsg)            
        // window.location.reload();
    this.setState({
        success:response.data.successmsg
    });
      setTimeout(function() {
        window.location.reload()
       }, 1000);
    })
    .catch(error=>{   
        this.setState({
            error:"Something went wrong. Try again!"
          })
        console.log(error.response.data.errmsg)
        })
}




       render(){

        return(
            <div>
                
                <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
<Navi />
      <div className="col-md-9 bg-white padding-2">
    
      <form>
    
          <div className="box-header with-border">
            <h3 className="box-title">Add new Blog</h3>
          </div>
         
          <div className="box-body">
        
  
              <div className="form-group">
                                                <label htmlFor="image">Image</label> 
                                                <input type="file" name="image" onChange={this.handleImageChange} 
                                                id="image" className="form-control"/>
                                            </div>
           
          </div>
          <div className="form-group">
              <textarea className="form-control input-lg" id="status" ref = "status" name="status" placeholder="status" value={this.state.status} onChange={this.handleChange}></textarea>
            </div>
       
          <div className="box-footer">
            <div className="pull-right">
            <button type="submit" onClick={this.postdata} className="btn btn-primary" ><i className="fa fa-envelope-o"></i> Post</button>
            </div>
            <a href="#" className="btn btn-primary"><i className="fa fa-times"></i> Discard</a>
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
export default Blogpage