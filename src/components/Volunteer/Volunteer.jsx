import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    skills: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        availability: '',
        skills: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="volunteer-page">
      <section className="volunteer-hero">
        <div className="container">
          <h1>Become a Volunteer</h1>
          <p>Make a difference in your community. Your time and skills can transform lives.</p>
        </div>
      </section>

      <section className="volunteer-opportunities">
        <div className="container">
          <h2>Volunteer Opportunities</h2>
          <div className="opportunities-grid">
            <div className="opportunity-box">
              <div className="opp-icon">🎓</div>
              <h3>Education & Outreach</h3>
              <p>Conduct workshops and educational sessions in schools and communities.</p>
              <ul>
                <li>Flexible scheduling</li>
                <li>Training provided</li>
                <li>Impact: 100+ students per month</li>
              </ul>
            </div>
            <div className="opportunity-box">
              <div className="opp-icon">💬</div>
              <h3>Counseling Support</h3>
              <p>Provide peer support and mentoring to individuals in recovery.</p>
              <ul>
                <li>Certification training available</li>
                <li>Flexible hours</li>
                <li>Impact: Direct life transformation</li>
              </ul>
            </div>
            <div className="opportunity-box">
              <div className="opp-icon">📋</div>
              <h3>Administrative</h3>
              <p>Help with office tasks, data entry, and event coordination.</p>
              <ul>
                <li>Remote options available</li>
                <li>Skills development</li>
                <li>Impact: Organization efficiency</li>
              </ul>
            </div>
            <div className="opportunity-box">
              <div className="opp-icon">🎉</div>
              <h3>Events & Fundraising</h3>
              <p>Assist with organizing and running community events.</p>
              <ul>
                <li>Creative opportunities</li>
                <li>Team environment</li>
                <li>Impact: Community engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer-benefits">
        <div className="container">
          <h2>Benefits of Volunteering</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>🎯 Make an Impact</h3>
              <p>Directly contribute to transforming lives and building stronger communities.</p>
            </div>
            <div className="benefit-card">
              <h3>🤝 Build Connections</h3>
              <p>Meet like-minded individuals and build lasting relationships.</p>
            </div>
            <div className="benefit-card">
              <h3>📚 Learn & Grow</h3>
              <p>Gain valuable skills, certifications, and experience in the nonprofit sector.</p>
            </div>
            <div className="benefit-card">
              <h3>✨ Personal Fulfillment</h3>
              <p>Experience the satisfaction of giving back and making a difference.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-info">
              <h2>Join Our Volunteer Team</h2>
              <p>
                Fill out the form below to get started. Our volunteer coordinator will contact 
                you within 2-3 business days to discuss opportunities that match your interests 
                and availability.
              </p>
              <div className="info-box">
                <h3>What to Expect</h3>
                <ul>
                  <li>Orientation session</li>
                  <li>Training for your role</li>
                  <li>Ongoing support and supervision</li>
                  <li>Recognition and appreciation events</li>
                </ul>
              </div>
            </div>

            <form className="volunteer-form" onSubmit={handleSubmit}>
              <h3>Volunteer Application</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interest">Area of Interest *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an area</option>
                  <option value="education">Education & Outreach</option>
                  <option value="counseling">Counseling Support</option>
                  <option value="administrative">Administrative</option>
                  <option value="events">Events & Fundraising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="availability">Availability *</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills & Experience</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your relevant skills, experience, or certifications..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to volunteer? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Share your motivation for volunteering with us..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Thank you for your interest! We'll be in touch soon.
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

