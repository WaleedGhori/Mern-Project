import React from 'react'
// import UserPic from "../images/userpic.jpg"

const About = () => {
  return (
    <>
    <div className='container emp-profile'>
      <form method=''>
        <div className='row'>
          <div className='col-md-4'>
            <img src="/images/userpic.jpg" alt="userpic" />
          </div>

          <div className='col-md-6'>
            <div className='profile-head'>
              <h5>Safdar Hussain</h5>
              <h6>Web Developer</h6>
              <p className='profile-rating mt-3 mb-5'>RANKING: <span>1/10</span></p>
              <ul className='nav nav-tabs' role="tablist">
                <li className='nav-item'>
                  <a className='nav-link active' id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link active' id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2'>
            <input type="text" className='profile-edit-btn' value="Edit Profile" />
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default About