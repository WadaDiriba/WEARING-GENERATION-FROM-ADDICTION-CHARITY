import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using our services.</p>
          <p className="last-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Introduction */}
            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Weaning Generation From Addiction website and services, 
                you agree to be bound by these Terms of Service ("Terms"). If you disagree with 
                any part of these terms, you may not access or use our services.
              </p>
              <p>
                These Terms apply to all visitors, users, donors, volunteers, and others who access 
                or use our services.
              </p>
            </section>

            {/* Use of Website */}
            <section className="terms-section">
              <h2>2. Use of Website</h2>
              <h3>2.1 Permitted Use</h3>
              <p>You may use our website for lawful purposes only, including:</p>
              <ul>
                <li>Learning about our mission and programs</li>
                <li>Making donations to support our cause</li>
                <li>Applying to volunteer</li>
                <li>Contacting us for information</li>
                <li>Accessing educational resources</li>
              </ul>

              <h3>2.2 Prohibited Activities</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>Violate any international, federal, provincial, or state regulations, rules, or laws</li>
                <li>Infringe upon or violate our intellectual property rights or the rights of others</li>
                <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>Submit false or misleading information</li>
                <li>Upload or transmit viruses or any other type of malicious code</li>
                <li>Collect or track the personal information of others</li>
                <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>Interfere with or circumvent the security features of the website</li>
              </ul>
            </section>

            {/* Donations */}
            <section className="terms-section">
              <h2>3. Donations and Refunds</h2>
              <h3>3.1 Donations</h3>
              <p>
                All donations made through our website are final and non-refundable, except as required 
                by law. We appreciate your generous contributions to support our mission.
              </p>
              <p>
                Donations are processed securely through third-party payment processors. You acknowledge 
                that we are not responsible for the processing of payments or any issues that may arise 
                with payment processing.
              </p>

              <h3>3.2 Tax Deductibility</h3>
              <p>
                Donations to Weaning Generation From Addiction are tax-deductible to the extent allowed 
                by law. You will receive a receipt for your donation for tax purposes. We recommend 
                consulting with a tax professional regarding the deductibility of your donation.
              </p>

              <h3>3.3 Refund Policy</h3>
              <p>
                Refunds may be granted in exceptional circumstances, such as processing errors or 
                fraudulent transactions. Requests for refunds must be submitted within 30 days of 
                the donation date and will be reviewed on a case-by-case basis. Contact us at 
                <a href="mailto:donations@weaninggeneration.org"> donations@weaninggeneration.org</a> 
                for refund inquiries.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="terms-section">
              <h2>4. Intellectual Property</h2>
              <p>
                The website and its original content, features, and functionality are owned by 
                Weaning Generation From Addiction and are protected by international copyright, 
                trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly 
                display, publicly perform, republish, download, store, or transmit any of the 
                material on our website without our prior written consent.
              </p>
              <p>
                Our logo, name, and other trademarks are the property of Weaning Generation From 
                Addiction. You may not use our trademarks without our prior written permission.
              </p>
            </section>

            {/* User Conduct */}
            <section className="terms-section">
              <h2>5. User Conduct and Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information when requested</li>
                <li>Maintain and promptly update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials (if applicable)</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use or security breach</li>
                <li>Use the website in a manner consistent with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="terms-section">
              <h2>6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Weaning Generation From Addiction, its 
                officers, directors, employees, agents, and affiliates shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages, or any 
                loss of profits or revenues, whether incurred directly or indirectly, or any 
                loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul>
                <li>Your use or inability to use the website or services</li>
                <li>Any unauthorized access to or use of our servers and/or personal information</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result</li>
                <li>Any interruption or cessation of transmission to or from the website</li>
                <li>Any bugs, viruses, trojan horses, or similar items transmitted through the website</li>
              </ul>
              <p>
                Our total liability to you for all claims arising out of or relating to the use 
                of our services shall not exceed the amount you paid to us, if any, in the 
                twelve (12) months prior to the action giving rise to liability.
              </p>
            </section>

            {/* Indemnification */}
            <section className="terms-section">
              <h2>7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Weaning Generation From Addiction, 
                its officers, directors, employees, and agents from and against any claims, liabilities, 
                damages, losses, and expenses, including reasonable attorney's fees, arising out of or 
                in any way connected with:
              </p>
              <ul>
                <li>Your access to or use of the website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable law or regulation</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="terms-section">
              <h2>8. Disclaimers</h2>
              <p>
                The information on this website is provided on an "as is" and "as available" basis. 
                We make no representations or warranties of any kind, express or implied, as to the 
                operation of the website or the information, content, materials, or products included 
                on the website.
              </p>
              <p>
                We do not warrant that the website will be uninterrupted, secure, or error-free, or 
                that defects will be corrected. We do not warrant or make any representations regarding 
                the use or the results of the use of the website in terms of correctness, accuracy, 
                reliability, or otherwise.
              </p>
            </section>

            {/* Modifications */}
            <section className="terms-section">
              <h2>9. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes by posting the new Terms on this page and updating the "Last Updated" 
                date.
              </p>
              <p>
                Your continued use of our services after any changes indicates your acceptance of 
                the modified Terms. If you do not agree to the modified Terms, you must stop using 
                our services.
              </p>
            </section>

            {/* Governing Law */}
            <section className="terms-section">
              <h2>10. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which Weaning Generation From Addiction operates, without regard to 
                its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or our services shall be 
                resolved in the courts of competent jurisdiction in that same jurisdiction.
              </p>
            </section>

            {/* Severability */}
            <section className="terms-section">
              <h2>11. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that 
                provision shall be limited or eliminated to the minimum extent necessary, and 
                the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Contact */}
            <section className="terms-section">
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="contact-details">
                <p><strong>Weaning Generation From Addiction</strong></p>
                <p>Email: <a href="mailto:legal@weaninggeneration.org">legal@weaninggeneration.org</a></p>
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

      <section className="terms-footer-cta">
        <div className="container">
          <p>Have questions? <Link to="/contact">Contact Us</Link></p>
        </div>
      </section>
    </div>
  );
};

export default Terms;

