import React from 'react';

import Header from './Header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import StartPlanning from './HomePage/StartPlanning';


class HomePage extends React.Component{


    constructor(){
        super();
        this.state = {
            venuesarray : [],

            //Storing token from sessionStroage to state
            token : sessionStorage.getItem("user_token")
        }
    }
    render()
    {
    return(
      <div>
          {/* Header Section */}
          <Header />
         
           


                {/* Start Events Planning Component */}
                <div  id = "planning"></div>
                <StartPlanning />


      </div>
    )
    }

}


export default HomePage;    