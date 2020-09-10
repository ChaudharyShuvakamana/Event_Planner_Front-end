import React from 'react'



class Indexpage extends React.Component{
   
       render(){

        return(
            <div>

<div className="wrapper">

<div className="content-wrapper">
 <section className="content-header bg-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center index-head">
            <h1>Find<strong> the venue and professional</strong> of your choice</h1>
          </div>
        </div>
      </div>
    </section>
	
	
		

    <section className="content-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 latest-job margin-bottom-20">
                

           
         

          </div>
        </div>
      </div>
    </section>
	 	
    <section id="candidates" className="content-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center latest-job margin-bottom-20">
            <h1>User</h1>
            <p>Finding a venue and professional just got easier. Create a profile and start creating event.</p>            
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail candidate-img">
              <img src="../../img/rg.jpg" alt="Browse Jobs" />
              <div className="caption">
                <h3 className="text-center">Register to the website</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail candidate-img">
              <img src="../../img/lg.jpg" alt="Apply and Get Interviewed" />
              <div className="caption">
                <h3 className="text-center">Get login</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail candidate-img">
              <img src="../../img/pl.png" alt="Start A Career" />
              <div class="caption">
                <h3 class="text-center">Start planning</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	
	 <section id="company" class="content-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center latest-job margin-bottom-20">
            <h1>Vendor</h1>
            <p>Register your company for free, post and track venue and professional</p>            
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail company-img">
              <img src="../../img/rg.jpg" alt="Browse Jobs" />
              <div class="caption">
                <h3 class="text-center">Register to the website</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail company-img">
              <img src="../../img/ll.png" alt="Apply & Get Interviewed" />
              <div class="caption">
                <h3 class="text-center">Get login</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="thumbnail company-img">
              <img src="../../img/ps.jpg" alt="Start A Career" />
              <div class="caption">
                <h3 class="text-center">Start expanding your business</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	  
 </div>
 
 </div>

	
 <div className="container" id="contact">
        <h2 className="font-weight-light text-black text-center">Contact Us</h2>
        <div className="row">
            <div className="col-md-5">

                <div className="p-4 mb-3 bg-white">
                    <p className="mb-0 font-weight-bold">Address</p>
                    <p className="mb-4">shikhar galli,House number 104 ,maitidevi, kathmandu, Nepal</p>

                    <p className="mb-0 font-weight-bold">Phone</p>
                    <p className="mb-4"><a href="#">+977 9860049993</a></p>

                    <p className="mb-0 font-weight-bold">Email Address</p>
                    <p className="mb-0"><a href="#">info@eventplanner.com</a></p>

                </div>

                <div className="p-4 mb-3 bg-white">
                    <h3 className="h5 text-black mb-3">More Info</h3>
                    <p>Be free to create event whenever you like by just login to the website</p>
                    <p><a href="signup" className="btn btn-primary px-4 py-2 text-white">Signup Now</a></p>
                </div>

            </div>
        </div>
    </div>
 
           
            </div>
           
        )
       }
       

}
export default Indexpage
