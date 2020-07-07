import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Navi from '../Navi'
import '../../css/Table.css'


class Managevenue extends React.Component{
    Deletevenue = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/venue/"+id)
        window.location.reload()
        }

        
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/venue").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
              
                             <table id="customers">
                  
                  <tr>
    <th>Venue Image</th>               
    <th>venue Name</th>
    <th>venue Type</th>
    <th>Description</th>
    <th>Phone </th>
    <th>Email</th>
    <th>Address</th>
    
    <th> Action</th>
  </tr>
              
  <tr >
  <img src = {"http://localhost:4000/public/images/" + hlists.Image} style = {{width : "80px" , marginLeft:"5px", height: "80px"}}/>
   <td>{hlists.venuename}</td>
    <td>{hlists.venuetype}</td>
    <td>{hlists.description}</td>
    <td>{hlists.phone}</td>
    <td>{hlists.email}</td>
     <td>{hlists.address}</td>
     

    <td>
<button class ="bt1" onClick = {() => this.Deletevenue(hlists._id)}>Delete</button>
<button class ="bt1"> <NavLink to={"/Updatevenue/"+hlists._id}>Update</NavLink></button>

    </td>

  </tr>
           </table>

            
            )
            
             })
        
        
         return(
            <div>
            <div className="content-wrapper">
                <section id="candidates" className="content-header">
                    <div className="container">
                        <div className="row">
                            <Navi />

                            <div className="col-md-9 bg-white padding-2">
                                <form className="form validate-form flex-sb flex-w">
                           

                                    <div className="box-header with-border">
                                        <h3 className="box-title">List of venues</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="container-fluid">

                                        {mydata222}
                                        </div>

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
export default Managevenue