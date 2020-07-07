import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import AdminHeader from './AdminHeader'


class Manageuser extends React.Component{
    Deleteuser = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/user/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/user").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
               
                     
              
              
        <table id="customers">
               <tr>
    <th>Fullname</th>
    <th>Email</th>
    <th>Address</th>
    <th>Contact Number</th>
    <th>user Type</th>
    <th> Action</th>
  </tr>
 

  <tr>
   <td>{hlists.fullname}</td>
    <td>{hlists.email}</td>
    <td>{hlists.address}</td>
    <td>{hlists.number}</td>
    <td>{hlists.user_type}</td>

    <td>
<button class ="bt1" onClick = {() => this.Deleteuser(hlists._id)}>Delete</button>
<button class= "bt2" > <NavLink to={"/Updateuser/"+hlists._id}>Update</NavLink> </button>
    </td>

  </tr>
  </table>
         
         
            
            )
            
             })
        
        
         return(
        <section>
        
        <AdminHeader/>
   
        
         {mydata222}
        
        </section>
        )
    }
}
export default Manageuser