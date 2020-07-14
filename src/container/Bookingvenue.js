import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Bookingvenuepage from '../components/Bookingvenuepage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'
class Bookingvenue extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
        this.state = {
            user:{},
            id:"",
            posts:[],
            venues:[],
            comment:"",
              config: {
                  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
              }
          }
      }

    componentDidMount() {
        axios.get('http://localhost:3000/userlogincheck', this.state.config)
            .then((response) => {
                this.setState({
                    id:response.data._id,
                    isLoggedIn: true,
                    user:response.data
                    }) 
            });
        axios.get("http://localhost:3000/findpost").then(res => {
            this.setState({ venues: res.data });
        })
        console.log(this.state.venues)
    }

    render(){
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/' />
          }
          return(
              <div>
                  <Header />
                  <Bookingvenuepage venue={this.state.venues} user={this.state.user} />
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Bookingvenue