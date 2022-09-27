import React from "react";

const Contact = () => {
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
                  <div className="contact_info_text">safdarse063@gmail</div>
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
                  <form id="contact_form">
                    <div className="contact_form_name d-lg-flex justify-content-between align-items-between .flex-sm-column">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Your Name"
                        required="true"
                      />

                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        placeholder="Your Email"
                        required="true"
                      />

                      <input
                        type="Number"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        placeholder="Your Phone Number"
                        required="true"
                      />
                    </div>
                    <div className="contact_form_text mt-5">
                      <textarea className="text_field contact_form_message" placeholder="Message" cols="30" rows="10"></textarea>
                    </div>

                    <div className="contact_form_button">
                      <button className="button contact_submit_button" type="submit">Send Message</button>
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
