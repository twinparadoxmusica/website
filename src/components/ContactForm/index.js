import React, { useState } from 'react';
import './styles.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(
      'https://formsubmit.co/twinparadoxmusica@gmail.com',
      {
        method: 'POST',
        body: data,
      }
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-wrapper">
      <h2 className="margin-bottom-sm">Contact Form</h2>
      {submitted ? (
        <p className="success-message">
          ✅ Your message was sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <p className="contact-prompt">
            We&apos;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, drop us a message below —
            we&rsquo;ll get back to you as soon as we can. 🚀
          </p>
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
