import axios from 'axios'
import React from 'react'
import AdminNavi from '../Admin/AdminNavi'
import Adminpost from './Adminpost'

class Adminpannel extends React.Component{
  
  render(){
  const photoblog = this.props.post.map(post => {
    return <Adminpost post={post} />
  })
    return(
        <div>
            
            <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
<div className="container">
  <div className="row">
<AdminNavi />
<div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
      
        <div class="col-md-7 gedf-main">
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
 export default Adminpannel