import React from 'react'
import UserDetail from '../../components/Admin/UserDetail';
import Header from '../../components/Headers';
import Footer from '../../components/Footer';



class UserDetails extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <UserDetail />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default UserDetails
