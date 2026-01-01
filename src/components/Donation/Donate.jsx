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
          <p>Your donation helps us transform lives and build communities free from addiction</p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="why-donate">
        <div className="container">
          <h2>Why Your Donation Matters</h2>
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
              <h2>Make Your Donation</h2>
              
              {/* Donation Type */}
              <div className="donation-type">
                <button
                  className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                  onClick={() => setDonationType('one-time')}
                >
                  One-Time Donation
                </button>
                <button
                  className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly Donation
                </button>
              </div>

              {/* Amount Selection */}
              <div className="amount-selection">
                <h3>Select Amount</h3>
                <div className="amount-grid">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <label>Or Enter Custom Amount</label>
                  <div className="custom-input-wrapper">
                    <span className="currency">$</span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="0.00"
                      className="custom-amount-input"
                    />
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              <form className="donation-form" onSubmit={handleSubmit}>
                <h3>Donor Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-row-small">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zipCode">Zip Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
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
                  <h3>Payment Information</h3>
                  
                  <div className="payment-methods">
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleInputChange}
                      />
                      <span>Credit/Debit Card</span>
                    </label>
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                      />
                      <span>PayPal</span>
                    </label>
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank-transfer"
                        checked={formData.paymentMethod === 'bank-transfer'}
                        onChange={handleInputChange}
                      />
                      <span>Bank Transfer</span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'credit-card' && (
                    <div className="card-details">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          required={formData.paymentMethod === 'credit-card'}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardName">Name on Card *</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'credit-card'}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="expiryDate">Expiry Date *</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required={formData.paymentMethod === 'credit-card'}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cvv">CVV *</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                            required={formData.paymentMethod === 'credit-card'}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'paypal' && (
                    <div className="payment-info">
                      <p>You will be redirected to PayPal to complete your donation securely.</p>
                    </div>
                  )}

                  {formData.paymentMethod === 'bank-transfer' && (
                    <div className="payment-info">
                      <p><strong>Bank Transfer Details:</strong></p>
                      <p>Account Name: Weaning Generation Charity</p>
                      <p>Account Number: 1234567890</p>
                      <p>Routing Number: 987654321</p>
                      <p>Bank: Community Bank</p>
                    </div>
                  )}
                </div>

                {/* Donation Summary */}
                <div className="donation-summary">
                  <div className="summary-row">
                    <span>Donation Amount:</span>
                    <span className="amount">${finalAmount.toFixed(2)}</span>
                  </div>
                  {donationType === 'monthly' && (
                    <div className="summary-row">
                      <span>Frequency:</span>
                      <span>Monthly</span>
                    </div>
                  )}
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span className="total-amount">${finalAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Messages */}
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Thank you for your generous donation! Your contribution will make a real difference.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Please select or enter a donation amount.
                  </div>
                )}

                <button type="submit" className="donate-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : `Donate $${finalAmount.toFixed(2)} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
                </button>

                <p className="secure-notice">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Your donation is secure and encrypted. We never store your payment information.
                </p>
              </form>
            </div>

            {/* Right Side - Information */}
            <div className="donation-info">
              <div className="info-box">
                <h3>How Your Donation Helps</h3>
                <ul className="impact-list">
                  <li>
                    <strong>$25</strong> - Provides educational materials for one person
                  </li>
                  <li>
                    <strong>$50</strong> - Covers counseling session costs
                  </li>
                  <li>
                    <strong>$100</strong> - Supports community outreach programs
                  </li>
                  <li>
                    <strong>$250</strong> - Funds prevention workshops for youth
                  </li>
                  <li>
                    <strong>$500</strong> - Enables recovery support programs
                  </li>
                  <li>
                    <strong>$1000+</strong> - Creates long-term sustainable impact
                  </li>
                </ul>
              </div>

              <div className="info-box">
                <h3>Tax Deductible</h3>
                <p>
                  All donations are tax-deductible to the full extent allowed by law. 
                  You will receive a receipt for your records.
                </p>
              </div>

              <div className="info-box">
                <h3>Where Your Money Goes</h3>
                <div className="breakdown">
                  <div className="breakdown-item">
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="breakdown-label">
                      <span>Programs & Services</span>
                      <span>75%</span>
                    </div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '15%' }}></div>
                    </div>
                    <div className="breakdown-label">
                      <span>Administration</span>
                      <span>15%</span>
                    </div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-bar">
                      <div className="breakdown-fill" style={{ width: '10%' }}></div>
                    </div>
                    <div className="breakdown-label">
                      <span>Fundraising</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-box">
                <h3>Other Ways to Give</h3>
                <ul className="ways-list">
                  <li>Corporate Sponsorships</li>
                  <li>In-Kind Donations</li>
                  <li>Planned Giving</li>
                  <li>Volunteer Your Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="donation-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is my donation tax-deductible?</h3>
              <p>Yes, all donations are tax-deductible. You will receive a receipt via email that you can use for tax purposes.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my monthly donation?</h3>
              <p>Yes, you can cancel your monthly donation at any time by contacting us or managing your subscription in your account settings.</p>
            </div>
            <div className="faq-item">
              <h3>How secure is my payment information?</h3>
              <p>We use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers.</p>
            </div>
            <div className="faq-item">
              <h3>Can I donate anonymously?</h3>
              <p>Yes, you have the option to donate anonymously during checkout. Your information will remain private.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept credit cards, debit cards, PayPal, and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h3>Will I receive a receipt?</h3>
              <p>Yes, you will receive an email receipt immediately after your donation is processed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

