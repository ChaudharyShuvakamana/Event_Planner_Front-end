import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Bookingbusinesspage from '../components/Bookingbusinesspage';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import axios from 'axios'
class Bookingbusiness extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
        this.state = {
            user:{},
            id:"",
            posts:[],
            businesss:[],
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
        axios.get("http://localhost:3000/findbusiness").then(res => {
            this.setState({ businesss: res.data });
        })
        console.log(this.state.businesss)
    }

    render(){
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/' />
          }
          return(
              <div>
                  <Header />
                  <Bookingbusinesspage business={this.state.businesss} user={this.state.user} />
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Bookingbusiness