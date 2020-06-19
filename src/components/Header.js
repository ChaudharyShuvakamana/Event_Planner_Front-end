import React from 'react'


class Header extends React.Component{

   render(){

        return(
<div>
<header class="main-header">


<a href="/" class="logo  ">

  <span class="logo-mini"><b>Event</b>Planner</span>

  <span class="logo-lg"><b>Event</b>Planner </span>
</a>


<nav class="navbar navbar-static-top">
 
  <div class="navbar-custom-menu">
    <ul class="nav navbar-nav">
      <li>
        <a href="login">Login</a>
      </li>
      <li>
        <a href="Signup">Sign Up</a>
      </li>  
 
    </ul>
  </div>
</nav>
</header>
            </div>
           
        )
       }
       

}
export default Header
