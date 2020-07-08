import React from 'react'
import Businesspage from '../components/Businesspage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'



class business extends React.Component{
  render(){
        return(
            <div>
                <Header />
                <Businesspage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default business