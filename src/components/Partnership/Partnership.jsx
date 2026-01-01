import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Partnership.css';

const Partnership = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="partnership-page">
      <section className="partnership-hero">
        <div className="container">
          <h1>Partner With Us</h1>
          <p>Together we can create greater impact and transform more lives</p>
        </div>
      </section>

      <section className="partnership-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Why Partner With Us?</h2>
            <p>
              Strategic partnerships are essential to our mission. By joining forces with 
              businesses, organizations, and institutions, we can amplify our impact, reach 
              more communities, and create sustainable solutions to addiction prevention and recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="partnership-types">
        <div className="container">
          <h2>Partnership Opportunities</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">🏢</div>
              <h3>Corporate Partnerships</h3>
              <p>Partner with us through corporate sponsorships, employee volunteering, matching gifts, and cause-related marketing initiatives.</p>
              <ul>
                <li>Brand visibility and recognition</li>
                <li>Employee engagement opportunities</li>
                <li>CSR impact reporting</li>
                <li>Tax benefits</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon">🏥</div>
              <h3>Healthcare Partnerships</h3>
              <p>Collaborate with hospitals, clinics, and healthcare providers to improve access to treatment and recovery services.</p>
              <ul>
                <li>Referral networks</li>
                <li>Joint programs</li>
                <li>Resource sharing</li>
                <li>Professional development</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon">🎓</div>
              <h3>Educational Partnerships</h3>
              <p>Work with schools, universities, and educational institutions to implement prevention and awareness programs.</p>
              <ul>
                <li>Curriculum development</li>
                <li>Student engagement</li>
                <li>Research collaboration</li>
                <li>Training programs</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon">🤝</div>
              <h3>Community Partnerships</h3>
              <p>Join forces with community organizations, nonprofits, and local groups to strengthen community support networks.</p>
              <ul>
                <li>Resource sharing</li>
                <li>Joint events</li>
                <li>Community outreach</li>
                <li>Mutual support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-benefits">
        <div className="container">
          <h2>Benefits of Partnership</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <div className="benefit-content">
                <h3>Amplified Impact</h3>
                <p>Combine resources and expertise to reach more people and create greater change than either partner could achieve alone.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <div className="benefit-content">
                <h3>Enhanced Credibility</h3>
                <p>Build trust and credibility in your community by aligning with a respected organization dedicated to social good.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <div className="benefit-content">
                <h3>Shared Resources</h3>
                <p>Leverage shared resources, networks, and knowledge to maximize efficiency and effectiveness of programs.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <div className="benefit-content">
                <h3>Innovation & Growth</h3>
                <p>Collaborate on innovative solutions, learn from each other, and grow together while serving the community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Become a Partner</h2>
              <p>Fill out the form below and our partnership team will contact you to discuss collaboration opportunities.</p>
            </div>

            <form className="partnership-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="organizationName">Organization Name *</label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  placeholder="Your organization or company name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="partnershipType">Partnership Type *</label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="healthcare">Healthcare Partnership</option>
                    <option value="educational">Educational Partnership</option>
                    <option value="community">Community Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your partnership interest *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  placeholder="Describe how you'd like to partner with us, what you can offer, and what you hope to achieve..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Thank you for your interest in partnering with us! We'll be in touch soon.
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="partnership-cta">
        <div className="container">
          <h2>Ready to Make a Difference Together?</h2>
          <p>Let's explore how we can collaborate to create lasting impact in our communities.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Partnership;

