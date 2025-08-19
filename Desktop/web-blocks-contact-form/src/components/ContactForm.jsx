import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-bg">
      <div className="container contact-form-container p-4">
        <h2 className="text-white text-center mb-4">Get into the Conversation</h2>
        <form>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
