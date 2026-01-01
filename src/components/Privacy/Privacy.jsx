import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
          <p className="last-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Introduction */}
            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Weaning Generation From Addiction ("we," "our," or "us") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website, make a donation, volunteer, or interact 
                with our services.
              </p>
              <p>
                By using our website or services, you agree to the collection and use of information 
                in accordance with this policy. If you do not agree with our policies and practices, 
                please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="policy-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Payment information for donations (processed securely through third-party payment processors)</li>
                <li>Demographic information (age, location, etc.)</li>
                <li>Volunteer application information</li>
                <li>Any other information you choose to provide through forms, surveys, or communications</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Processing donations and providing receipts</li>
                <li>Managing volunteer applications and coordinating volunteer activities</li>
                <li>Communicating with you about our programs, events, and updates</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Compliance with legal obligations and protecting our rights</li>
                <li>Sending newsletters and marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="policy-section">
              <h2>4. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3>4.1 Service Providers</h3>
              <p>
                We may share information with trusted third-party service providers who assist us in 
                operating our website, processing payments, sending emails, or conducting our operations. 
                These service providers are contractually obligated to protect your information.
              </p>

              <h3>4.2 Legal Requirements</h3>
              <p>
                We may disclose information if required by law, court order, or governmental authority, 
                or to protect our rights, property, or safety, or that of others.
              </p>

              <h3>4.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be 
                transferred to the acquiring entity.
              </p>

              <h3>4.4 With Your Consent</h3>
              <p>We may share your information with your explicit consent for specific purposes.</p>
            </section>

            {/* Data Security */}
            <section className="policy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet or electronic storage is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
              <p>Our security measures include:</p>
              <ul>
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            {/* User Rights */}
            <section className="policy-section">
              <h2>6. Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information, including:</p>
              <ul>
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end 
                of this policy.
              </p>
            </section>

            {/* Cookies */}
            <section className="policy-section">
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small text files stored on your device that help us:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may 
                affect the functionality of our website.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="policy-section">
              <h2>8. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible 
                for the privacy practices of these third parties. We encourage you to review their privacy 
                policies before providing any information.
              </p>
              <p>
                We use third-party services for payment processing, email delivery, analytics, and other 
                functions. These services have their own privacy policies governing data collection and use.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="policy-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected 
                information from a child under 13, we will take steps to delete such information promptly.
              </p>
              <p>
                If you believe we have collected information from a child under 13, please contact us 
                immediately.
              </p>
            </section>

            {/* Policy Changes */}
            <section className="policy-section">
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for legal, operational, or regulatory reasons. We will notify you of any material 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the 
                updated Privacy Policy.
              </p>
            </section>

            {/* Contact */}
            <section className="policy-section">
              <h2>11. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="contact-details">
                <p><strong>Weaning Generation From Addiction</strong></p>
                <p>Email: <a href="mailto:privacy@weaninggeneration.org">privacy@weaninggeneration.org</a></p>
                <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <p>
                  Address: 123 Charity Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="privacy-footer-cta">
        <div className="container">
          <p>Have questions? <Link to="/contact">Contact Us</Link></p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

