import React from 'react'
import Indexpage from '../components/Indexpage';
import Header from '../components/Header';
import Footer from '../components/Footer';



class Home extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <Indexpage />
                <Footer/>
             

    
           
           
            </div>
           
        )
       }
    }
    export default Home