import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserPic from "../images/userpic.jpg"

const About = () => {

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status===200) {
        const error = new Error(res.error);
        throw error;
      }


    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="profile-img">
                <img src="/images/userpic.jpg" alt="userpic" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <input
                type="text"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-3">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="#" target="_blank">
                  Facebook <br />
                </a>
                <a href="#" target="_blank">
                  Instagram <br />
                </a>
                <a href="#" target="_blank">
                  GitHub <br />
                </a>
                <a href="#" target="_blank">
                  LinkedIn <br />
                </a>
                <a href="#" target="_blank">
                  Twitter <br />
                </a>
              </div>
            </div>
            <div className="col-md-8 col-sm-9 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>User ID</span>
                    </div>
                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Name</span>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Email</span>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Phone</span>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Profession</span>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Experience</span>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Hourly Rate</span>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Total Project</span>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>English Level</span>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row my-1">
                    <div className="col-md-6">
                      <span>Avaliablity</span>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
