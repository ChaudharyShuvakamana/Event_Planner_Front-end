import React from 'react'
import Venuepage from '../components/Venuepage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'



class venue extends React.Component{
  render(){
        return(
            <div>
                <Header />
                <Venuepage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default venue