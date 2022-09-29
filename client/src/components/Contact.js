import React, { useState, useEffect } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const callContactPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  // we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]:value });
  };

  // send the data to the backend

  const contactSubmit = async (e) =>{
    e.preventDefault();
    const {name, email, phone, message} = userData;
    const res = await fetch('/contact', {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, message
      })
    })
    const data =await res.json();
    if (!data) {
      console.log("message not send");
    } else{
      alert("Message Send");
      setUserData({...userData, message: ""});
    }
  }


  return (
    <>
      <div className="contact-info">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-lg-flex justify-content-between .flex-sm-column">
              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+92 348 0296567</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/office/24/000000/chat.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">safdarse063@gmail.com</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/office/24/000000/map.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    Gulistan e Juhar Block 9, Karachi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container p-5">
                  <div className="contact_form_title">Get In Touch</div>
                  <form method="POST" id="contact_form">
                    <div className="contact_form_name d-lg-flex justify-content-between align-items-between .flex-sm-column">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Your Name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputs}
                        required="true"
                      />

                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        placeholder="Your Email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputs}
                        required="true"
                      />

                      <input
                        type="Number"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        placeholder="Your Phone Number"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputs}
                        required="true"
                      />
                    </div>
                    <div className="contact_form_text mt-5">
                      <textarea
                        className="text_field contact_form_message"
                        name="message"
                        value={userData.message}
                        onChange={handleInputs}
                        placeholder="Message"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>

                    <div className="contact_form_button">
                      <button
                        className="button contact_submit_button"
                        type="submit"
                        onClick={contactSubmit}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
