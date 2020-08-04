import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {



  constructor(props) {
    super(props)
    this.state = {
      
      isLoggedIn: false
    }
    this.state = {
      all_comments :[],
          comment:"",
          user_id : this.props.post.user_id._id,
          post_id : this.props.post._id,
          config: {
              headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
      }

      console.log(this.props.post)
  }

  handleChange = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    )
  }


    postcomment = (e) =>{
        // alert(this.state.comment)
        e.preventDefault();

        const data = {
          user_id: this.props.post.user_id._id,
          comment: this.state.comment,
          post_id: this.state.post_id
        }
        axios.post('http://localhost:3000/postcomment', data, this.state.config)
          .then(response=> {
          console.log(response.data.successmsg)            
              // window.location.reload();
          this.setState({
              success:response.data.successmsg
          });
            setTimeout(function() {
              window.location.reload()
              alert("Successfully updated");
             }, 1000);
          })
          .catch(error=>{   
              this.setState({
                  error:"Something went wrong. Try again!"
                })
              console.log(error.response.data.errmsg)
              })
      }
      componentDidMount() {
        // alert(this.props.post._id)
        axios.get('http://localhost:3000/getcommentbypostid/' + this.props.post._id, this.state.config)
                .then(res => {
                  console.log(res.data)
                  //alert(res.data)
            this.setState({
              all_comments : res.data,
               user_id: res.data.user_id,
               comment: res.data.comment

              });
        })
     // alert(this.state.all_comments)
    }


    render() {


      const commentbox = this.state.all_comments.map((post) => {
        return(
          <div className="comment-box">
            <div className="col-md-12 color-white">
                <img src={"http://localhost:3000/image/" + this.props.post.user_id.images} style={{marginTop:15}} className="img-circle" height="15px" width="20px" />
                <a href=""><strong>{this.props.post.user_id.fullname}</strong></a>
              
            </div>
        <div className="col-md-12">
            <p>{post.comment}</p>
        </div>

          </div>

        )
      
      })

        return (

            <div className="row post">
            <div className="col-md-12 color-white">
            <img src={"http://localhost:3000/image/" + this.props.post.user_id.images}  style={{marginTop:15}} className="img-circle" height="45px" width="40px" />
                <a href=""><strong>{this.props.post.user_id.fullname}</strong></a>
              
            </div>
            <div className="col-md-12">
                <p>{this.props.post.category}</p>
            </div>
            <div className="col-md-12">
                <p>{this.props.post.status}</p>
            </div>

            <div className="col-md-12"> 
                <img src={"http://localhost:3000/image/" + this.props.post.image} className="img-responsive post-img" width="100%"/>
                <br />
            </div>
            <div className="col-md-12 color-white">
            <textarea className="form-control" type="text" placeholder="Comment *" name="comment" onChange={this.handleChange} />
           
              <button type="button" className="btn btn-primary" style={{marginTop:15}} onClick={this.postcomment}> <i className="fa fa-comment" ></i> Comment</button>
        
         {commentbox}
            </div>
        </div>
                 )
    }
}
export default Post;