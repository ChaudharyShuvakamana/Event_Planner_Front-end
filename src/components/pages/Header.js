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


<nav class="navbar navbar-static-top justify-content-end">
 
  <div class="navbar-custom-menu">
  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="navlogin">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="navsignup">Sign up</a>
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
