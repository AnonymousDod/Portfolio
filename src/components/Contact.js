import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Use environment variable for API URL, fallback to localhost for development
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your inquiry! I will respond within 24-48 hours.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title" style={{ marginBottom: '1rem' }}>Contact</h2>

        <div className="contact__container grid">
          <div className="contact__content">
            <h3 className="contact__title">Contact Information</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="fas fa-envelope contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">rodmayol82@gmail.com</span>
                <a href="mailto:rodmayol82@gmail.com" className="contact__button">
                  Send Email <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="fab fa-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">Contact Number</h3>
                <span className="contact__card-data">+63 945 239 4586</span>
                <a href="https://wa.me/09452394586" className="contact__button" target="_blank" rel="noopener noreferrer">
                  Contact <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="fab fa-linkedin contact__card-icon"></i>
                <h3 className="contact__card-title">LinkedIn</h3>
                <span className="contact__card-data">linkedin.com/in/rod-kent-ito</span>
                <a href="https://www.linkedin.com/in/rod-kent-ito/" className="contact__button" target="_blank" rel="noopener noreferrer">
                  Connect <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Project Inquiry</h3>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-div">
                <label className="contact__form-tag"></label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag"></label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag"></label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Project details and requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {submitStatus.message && (
                <div 
                  className={`contact__status ${submitStatus.type === 'success' ? 'contact__status--success' : 'contact__status--error'}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn--primary contact__button-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

