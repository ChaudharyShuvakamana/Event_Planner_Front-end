import React from 'react'
import BusinessDetail from '../../components/Admin/BusinessDetail';
import Header from '../../components/Headers';
import Footer from '../../components/Footer';



class BusinessDetails extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <BusinessDetail />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default BusinessDetails
