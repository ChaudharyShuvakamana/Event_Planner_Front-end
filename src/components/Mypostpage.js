import React from 'react'
import axios from 'axios'
import Post from './post';
import { Redirect } from 'react-router';
import Navi from '../components/User/UserNavi';


class Mypostpage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        id:'',
        singleFeed:{},
        post_status :'',
        profileimage: '',
        name:'',
        post: [],
        user: {},
        test:'ssssssssssss',
        status:'',
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
                id:response.data._id,
                user: response.data,
                name:response.data.name,
                email:response.data.email,
                phone:response.data.phone,
                gender:response.data.gender,
                dob:response.data.dob
            })
            //alert(response.data._id)
            axios.get('http://localhost:3000/findblogbyuserid/' + response.data._id, this.state.config)
                .then((response) => {
               console.log(response.data)
                  this.setState({post : response.data})


                })

        })
}

updateFeed=(id)=>{
  // console.log('hit');
  // console.log(id);
  //alert(id)
  
  axios.get(`http://localhost:3000/singleblog/${id}`).then((response)=>{
// console.log(response);
//alert(response.data.singleFeed.user_id)
  this.setState({
    singleFeed:response.data,
    status:response.data.singleFeed.status,
    id:response.data.singleFeed._id,
  });    

  })  
}

handledelete(id, index){
  axios.delete("http://localhost:3000/deleteblog/" + id).then((res)=>{
    this.state.post.splice();
     window.location.reload(); 
  })
}

UpdateData = ()=>{
  // alert(this.state.id)
  const data = {
    
    status:this.state.status
    
  }

  console.log(this.state.singleFeed.category);
  axios.put("http://localhost:3000/blogupdate/"+this.state.id,data).then(
    setTimeout(function(){
      alert("Successfully updated");
      window.location.reload(); 
    }, 1000)
  )}
  
handlechange = (e) =>{
  this.setState(
  
    {[e.target.name]:e.target.value}
  )
}





 render(){
  //post design foreach loop
  const photoblog = this.state.post.map((post) => {
  return(
  <div className='row post'>
  
        
 <div className="col-md-12 color-white">
 <img src={"http://localhost:3000/image/" + post.user_id.images} style={{marginTop:15}} className="img-circle" height="45px" width="45px" />
      <a href="#"><strong>{post.user_id.fullname}</strong></a>
    
  </div>
  <div className="col-md-12">
      <p>{post.status}</p>
  </div>

  <div className="col-md-12">
      <img src={"http://localhost:3000/image/" + post.image} className="img-responsive post-img" width="70%" />
  </div>
  <div className="pull-right">
              <button type="button" className="btn btn-primary" onClick={this.deletepost} style={{marginRight:200,marginTop:15}}  onClick= {()=> this.handledelete(post._id)}> <i className="fa fa-times" ></i> Delete </button>
   </div>
   <div className="pull-left">
   
              <button type="button" className="btn btn-primary" style={{marginTop:15}} data-toggle="modal" onClick={()=>this.updateFeed(post._id)} data-target="#myModal"> <i className="fa fa-comment" ></i> Update</button>
              <div id="myModal" class="modal fade" role="dialog">
              <div className="modal-dialog">
         <div className="modal-content">
          <div className="modal-header">
              <form > 
                                      <div className="form-group">
                                        <textarea className="form-control" type="text" name='status' placeholder="Status" value={this.state.status} onChange={(event)=>this.setState({ status : event.target.value})}  />
                                    
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
        return(
            <div>
                
                <div className="content-wrapper" style={{marginleft: "0 px"}}>
                  

<section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
    <Navi />
      <div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
      <div className="col-md-12">
        
                                        <h3 className="mb-3 color-blue"><b>User Posts</b></h3>
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
export default Mypostpage