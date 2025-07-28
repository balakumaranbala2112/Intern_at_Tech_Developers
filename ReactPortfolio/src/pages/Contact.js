// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__title">
        <h2 className="titles">Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis impedit et facere.
          Autem optio, ipsa porro obcaecati fugit atque impedit, corrupti est laboriosam at amet, vitae et
          molestias tempore.
        </p>
      </div>

      <div className="contact__contents">
        <div className="contact__info">
          <div className="info">
            <h5>Contact Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel ullam voluptatibus?</p>
          </div>

          <div className="contact__info-item">
            <img src="/img/placeholder.png" alt="Location" width="40" />
            <div className="contact__info-val">
              <p className="contact__label">Location</p>
              <p className="contact__value">Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact__info-item">
            <img src="/img/mail.png" alt="Email" width="40" />
            <div className="contact__info-val">
              <p className="contact__label">Email</p>
              <p className="contact__value">bal@yahoo.com</p>
            </div>
          </div>

          <div className="contact__info-item">
            <img src="/img/phone-call.png" alt="Phone" width="40" height="40" />
            <div className="contact__info-val">
              <p className="contact__label">Phone</p>
              <p className="contact__value">5676873470</p>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <form>
            <div className="name-email">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="example@email.com" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject of your message" />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>
            </div>

            <div className="button">
              <button type="submit" className="send-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
