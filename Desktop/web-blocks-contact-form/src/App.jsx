import React from 'react';
import './App.css';

function App() {
  return (
    <div className="contact-form-container">
      <form className="form">
        <h2>Get into the Conversation</h2>
        <div className="input-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-row">
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;