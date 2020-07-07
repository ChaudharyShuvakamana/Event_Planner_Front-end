import React from 'react'
import axios from 'axios'

import { Redirect } from 'react-router-dom'
import { NavLink} from 'react-router-dom'



class LogOut extends React.Component {
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')} `}
        },

       // user_id:"/updateprofile/"+localStorage.getItem('user_id')
        

    }
    LogOut = () => {
        //delete token in browser and logout from backend
        axios.post('http://localhost:4000/logout')
        localStorage.removeItem('token')
        window.location.href = '/login'


    }


    render() {
       
        if (this.state.headersdata22.headers.Authorization === "Bearer null") {
            alert('Login! First')
            return <Redirect to='/login' />
        }
        return (
           

<p>Are You sure<button onClick={this.LogOut}>LogOut</button></p>
               

           
        )
    }
}

export default LogOut