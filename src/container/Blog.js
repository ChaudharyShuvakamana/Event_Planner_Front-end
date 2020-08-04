import React from 'react'
import Blogpage from '../components/Blogpage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'



class Blog extends React.Component{
  render(){
        return(
            <div>
                <Header />
                <Blogpage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default Blog