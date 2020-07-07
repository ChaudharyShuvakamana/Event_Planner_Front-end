// import React from'react'
// import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
// import AddHotel from './AddHotel'
// import ManageHotel from './ManageHotel'
// import UpdateUser from './UpdateUser'
// import Logout from './Logout'


// class Sidenav extends React.Component{
//     state = {

//         headersdata22: {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         },
//         user_id1:"/AddHotel/"+localStorage.getItem('user_id'),
//         user_id5:"/ManageHotel/"+localStorage.getItem('user_id'),
//         user_id8:"/UpdateUser/"+localStorage.getItem('user_id'),
       

        

//     }
//     render(){
//         if (this.state.headersdata22.headers.Authorization === "Bearer null") {
//             alert('Login! First')
//             return <Redirect to='/Login' />
//         }
//         return(
//             <div class="navbar">
//             <ul>
//                 <li><NavLink to= { `${this.state.user_id1}` } >Add Hotel</NavLink></li>
//                 <li><NavLink to={ `${this.state.user_id5}` }>Manage Hotel</NavLink></li>
//                 <li><NavLink to={ `${this.state.user_id8}` }>Update User</NavLink></li>
//                 <li><NavLink to="/logout" >Logout</NavLink></li>
               
               
            


//             </ul>

//             <Switch>
//                 <Route path="/AddHotel" exact component={AddHotel} />
//                 <Route path="/ManageHotel" exact component={ManageHotel} />
//                 <Route path="/UpdateUser" exact component={UpdateUser} />
//                 <Route path="/logout" exact component={Logout} />
             

//             </Switch>


//         </div>
//         )
//     }

// }
// export default Sidenav