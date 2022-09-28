import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Registration");
    }else if (res.status === 208) {
      window.alert("Please Filled All Field");
    }
     else {
      window.alert("Registration Successfull....");
      navigate("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account zmdi-hc-lg "></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInput}
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Your Phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    value={user.work}
                    onChange={handleInput}
                    placeholder="Your Profession"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-key zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-key zmdi-hc-2x material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInput}
                    placeholder="Conform Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="./images/signup.png" alt="registration pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
