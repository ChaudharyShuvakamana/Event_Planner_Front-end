import React from 'react'
import Post from './post2'
import Navi from './User/UserNavi';

class Bookingbusinesspage extends React.Component {

  render() {
    const photoblog = this.props.business.map(business => {
      return <Post business={business} />
    })
    return (


      <div>

        <div className="content-wrapper" style={{ marginleft: "0 px" }}>


          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
                <Navi />
                <div className="col-md-9 bg-white padding-2">
                  <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                    <div className="col-md-12">

                      <h3 className="mb-3 color-blue"><b>Businesss list</b></h3>
                      {photoblog}

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
export default Bookingbusinesspage