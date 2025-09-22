import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // In a real application, you would send the form data to a server here
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      message: 'Thank you for your message! I will get back to you soon.',
      isError: false,
      isSubmitted: true
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-4 fw-bold">Contact Me</h2>
          <div className="divider-custom my-4">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="bi bi-envelope-fill"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="lead">Have a question or want to work together? Feel free to contact me!</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {formStatus.message && (
            <div className={`alert ${formStatus.isError ? 'alert-danger' : 'alert-success'} mb-4`} role="alert">
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Send Message
            </button>
          </form>

          <div className="card shadow mt-4">
            <div className="card-body text-center">
              <h3 className="h4 mb-4">Follow Me</h3>
              <div className="d-flex social-links justify-content-center">
                <a href="https://github.com/ryanpaul46" className="me-3 text-dark fs-4"><i className="bi bi-github"></i></a>
                <a href="https://www.facebook.com/rpcollado.46" className="me-3 text-dark fs-4"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/rpcollado/" className="me-3 text-dark fs-4"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;