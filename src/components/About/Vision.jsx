import { Link } from 'react-router-dom';
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-page">
      <section className="vision-hero">
        <div className="container">
          <h1>Our Vision</h1>
          <p>Envisioning a future where every generation is free from addiction</p>
        </div>
      </section>

      <section className="vision-content">
        <div className="container">
          <div className="vision-main">
            <h2>Our Vision Statement</h2>
            <p className="vision-statement">
              We envision a world where every generation is free from the chains of addiction, 
              where individuals and communities thrive in health, wellness, and fulfillment. 
              A future where prevention, education, and support systems are so strong that 
              addiction becomes a thing of the past, and recovery is accessible, supported, 
              and celebrated by all.
            </p>
          </div>

          <div className="vision-future">
            <h2>The Future We're Building</h2>
            <div className="future-grid">
              <div className="future-card">
                <div className="future-icon">🌍</div>
                <h3>Global Impact</h3>
                <p>Expanding our reach to serve communities worldwide, sharing knowledge and best practices globally.</p>
              </div>
              <div className="future-card">
                <div className="future-icon">👥</div>
                <h3>Strong Communities</h3>
                <p>Building resilient communities where support networks prevent addiction and promote recovery.</p>
              </div>
              <div className="future-card">
                <div className="future-icon">🎓</div>
                <h3>Education First</h3>
                <p>Making comprehensive addiction education accessible to everyone, starting from early childhood.</p>
              </div>
              <div className="future-card">
                <div className="future-icon">💊</div>
                <h3>Better Treatment</h3>
                <p>Ensuring quality treatment and recovery support are accessible, affordable, and effective for all.</p>
              </div>
              <div className="future-card">
                <div className="future-icon">🤝</div>
                <h3>Unified Support</h3>
                <p>Creating seamless collaboration between families, communities, healthcare, and social services.</p>
              </div>
              <div className="future-card">
                <div className="future-icon">✨</div>
                <h3>Hope & Healing</h3>
                <p>Fostering a culture where recovery is celebrated and individuals are empowered to transform their lives.</p>
              </div>
            </div>
          </div>

          <div className="vision-cta">
            <h2>Help Us Achieve Our Vision</h2>
            <p>Your support brings us closer to making this vision a reality.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Support Our Vision</Link>
              <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;

