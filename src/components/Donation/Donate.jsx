import { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const donationAmount = selectedAmount || parseFloat(customAmount);

    if (!donationAmount || donationAmount <= 0) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    // Simulate donation processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: 'United States',
          paymentMethod: 'credit-card',
          cardNumber: '',
          cardName: '',
          expiryDate: '',
          cvv: ''
        });
        setSelectedAmount(null);
        setCustomAmount('');
      }, 3000);
    }, 2000);
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="container">
          <h1>Make a Difference Today</h1>
          <p className="hero-subtitle">
            Your donation helps us transform lives and build communities free from addiction
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="why-donate">
        <div className="container">
          <h2 className="section-title">Why Your Donation Matters</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">💚</div>
              <h3>Direct Impact</h3>
              <p>100% of your donation goes directly to programs that help individuals overcome addiction and rebuild their lives.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🏠</div>
              <h3>Community Support</h3>
              <p>Your contribution supports community outreach programs, counseling services, and educational initiatives.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>Prevention Programs</h3>
              <p>Funds prevention programs that educate youth and families about the dangers of addiction.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🤝</div>
              <h3>Sustainable Change</h3>
              <p>Help us create long-term, sustainable solutions that break the cycle of addiction for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Amount Selection */}
      <section className="donation-section">
        <div className="container">
          <div className="donation-wrapper">
            {/* Left Side - Donation Form */}
            <div className="donation-form-container">
              <h2 className="form-title">Make Your Donation</h2>
              
              {/* Donation Type */}
              <div className="donation-type-selector">
                <button
                  className={`donation-type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                  onClick={() => setDonationType('one-time')}
                  type="button"
                >
                  <span className="donation-type-label">One-Time Donation</span>
                </button>
                <button
                  className={`donation-type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setDonationType('monthly')}
                  type="button"
                >
                  <span className="donation-type-label">Monthly Donation</span>
                </button>
              </div>

              {/* Amount Selection */}
              <div className="amount-selection-section">
                <h3 className="amount-section-title">Select Amount</h3>
                <div className="amount-grid-layout">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`amount-option ${selectedAmount === amount ? 'selected' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                      type="button"
                    >
                      <span className="amount-value">${amount}</span>
                    </button>
                  ))}
                </div>
                <div className="custom-amount-section">
                  <label className="custom-amount-label">Or Enter Custom Amount</label>
                  <div className="custom-amount-input-wrapper">
                    <span className="currency-symbol">$</span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="0.00"
                      className="custom-amount-field"
                    />
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              <form className="donation-form" onSubmit={handleSubmit}>
                <h3 className="form-section-title">Donor Information</h3>
                
                <div className="form-row-layout">
                  <div className="form-field-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-layout">
                  <div className="form-field-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="address" className="form-label">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-row-layout">
                  <div className="form-field-group">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-row-compact">
                    <div className="form-field-group">
                      <label htmlFor="state" className="form-label">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="zipCode" className="form-label">Zip Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Payment Information */}
                <div className="payment-section">
                  <h3 className="form-section-title">Payment Information</h3>
                  
                  <div className="payment-methods-grid">
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleInputChange}
                        className="payment-method-radio"
                      />
                      <span className="payment-method-label">Credit/Debit Card</span>
                    </label>
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="payment-method-radio"
                      />
                      <span className="payment-method-label">PayPal</span>
                    </label>
                    <label className="payment-method-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank-transfer"
                        checked={formData.paymentMethod === 'bank-transfer'}
                        onChange={handleInputChange}
                        className="payment-method-radio"
                      />
                      <span className="payment-method-label">Bank Transfer</span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'credit-card' && (
                    <div className="card-details-section">
                      <div className="form-field-group">
                        <label htmlFor="cardNumber" className="form-label">Card Number *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          required={formData.paymentMethod === 'credit-card'}
                          className="form-input"
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="cardName" className="form-label">Name on Card *</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'credit-card'}
                          className="form-input"
                        />
                      </div>
                      <div className="form-row-layout">
                        <div className="form-field-group">
                          <label htmlFor="expiryDate" className="form-label">Expiry Date *</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required={formData.paymentMethod === 'credit-card'}
                            className="form-input"
                          />
                        </div>
                        <div className="form-field-group">
                          <label htmlFor="cvv" className="form-label">CVV *</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                            required={formData.paymentMethod === 'credit-card'}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'paypal' && (
                    <div className="payment-info-box">
                      <p className="payment-info-text">
                        You will be redirected to PayPal to complete your donation securely.
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === 'bank-transfer' && (
                    <div className="payment-info-box">
                      <p className="payment-info-text"><strong>Bank Transfer Details:</strong></p>
                      <p className="payment-info-text">Account Name: Weaning Generation Charity</p>
                      <p className="payment-info-text">Account Number: 1234567890</p>
                      <p className="payment-info-text">Routing Number: 987654321</p>
                      <p className="payment-info-text">Bank: Community Bank</p>
                    </div>
                  )}
                </div>

                {/* Donation Summary */}
                <div className="donation-summary-card">
                  <div className="summary-row">
                    <span className="summary-label">Donation Amount:</span>
                    <span className="summary-value">${finalAmount.toFixed(2)}</span>
                  </div>
                  {donationType === 'monthly' && (
                    <div className="summary-row">
                      <span className="summary-label">Frequency:</span>
                      <span className="summary-value">Monthly</span>
                    </div>
                  )}
                  <div className="summary-row total-row">
                    <span className="summary-total-label">Total:</span>
                    <span className="summary-total-value">${finalAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Messages */}
                {submitStatus === 'success' && (
                  <div className="form-message success-message">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="message-text">
                      Thank you for your generous donation! Your contribution will make a real difference.
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error-message">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span className="message-text">
                      Please select or enter a donation amount.
                    </span>
                  </div>
                )}

                <button type="submit" className="donate-action-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : `Donate $${finalAmount.toFixed(2)} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
                </button>

                <p className="security-notice">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span className="security-text">
                    Your donation is secure and encrypted. We never store your payment information.
                  </span>
                </p>
              </form>
            </div>

            {/* Right Side - Information */}
            <div className="donation-info-sidebar">
              <div className="info-card">
                <h3 className="info-card-title">How Your Donation Helps</h3>
                <ul className="impact-breakdown-list">
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$25</span>
                    <span className="impact-description">- Provides educational materials for one person</span>
                  </li>
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$50</span>
                    <span className="impact-description">- Covers counseling session costs</span>
                  </li>
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$100</span>
                    <span className="impact-description">- Supports community outreach programs</span>
                  </li>
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$250</span>
                    <span className="impact-description">- Funds prevention workshops for youth</span>
                  </li>
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$500</span>
                    <span className="impact-description">- Enables recovery support programs</span>
                  </li>
                  <li className="impact-breakdown-item">
                    <span className="impact-amount">$1000+</span>
                    <span className="impact-description">- Creates long-term sustainable impact</span>
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3 className="info-card-title">Tax Deductible</h3>
                <p className="info-card-text">
                  All donations are tax-deductible to the full extent allowed by law. 
                  You will receive a receipt for your records.
                </p>
              </div>

              <div className="info-card">
                <h3 className="info-card-title">Where Your Money Goes</h3>
                <div className="spending-breakdown">
                  <div className="breakdown-item">
                    <div className="breakdown-visual">
                      <div className="breakdown-bar">
                        <div className="breakdown-fill" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="breakdown-label-group">
                      <span className="breakdown-category">Programs & Services</span>
                      <span className="breakdown-percentage">75%</span>
                    </div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-visual">
                      <div className="breakdown-bar">
                        <div className="breakdown-fill" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div className="breakdown-label-group">
                      <span className="breakdown-category">Administration</span>
                      <span className="breakdown-percentage">15%</span>
                    </div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-visual">
                      <div className="breakdown-bar">
                        <div className="breakdown-fill" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                    <div className="breakdown-label-group">
                      <span className="breakdown-category">Fundraising</span>
                      <span className="breakdown-percentage">10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-card-title">Other Ways to Give</h3>
                <ul className="alternative-ways-list">
                  <li className="alternative-way-item">Corporate Sponsorships</li>
                  <li className="alternative-way-item">In-Kind Donations</li>
                  <li className="alternative-way-item">Planned Giving</li>
                  <li className="alternative-way-item">Volunteer Your Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="donation-faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid-layout">
            <div className="faq-item">
              <h3 className="faq-question">Is my donation tax-deductible?</h3>
              <p className="faq-answer">Yes, all donations are tax-deductible. You will receive a receipt via email that you can use for tax purposes.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I cancel my monthly donation?</h3>
              <p className="faq-answer">Yes, you can cancel your monthly donation at any time by contacting us or managing your subscription in your account settings.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How secure is my payment information?</h3>
              <p className="faq-answer">We use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I donate anonymously?</h3>
              <p className="faq-answer">Yes, you have the option to donate anonymously during checkout. Your information will remain private.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">We accept credit cards, debit cards, PayPal, and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Will I receive a receipt?</h3>
              <p className="faq-answer">Yes, you will receive an email receipt immediately after your donation is processed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;