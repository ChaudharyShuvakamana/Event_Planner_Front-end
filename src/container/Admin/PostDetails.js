import React from 'react'
import PostDetail from '../../components/Admin/PostDetail';
import Header from '../../components/Headers';
import Footer from '../../components/Footer';



class PostDetails extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <PostDetail />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default PostDetails
