import { Link } from 'react-router-dom';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      <section className="mission-hero">
        <div className="container">
          <h1>Our Mission</h1>
          <p>Dedicated to empowering individuals and communities to overcome addiction</p>
        </div>
      </section>

      <section className="mission-content">
        <div className="container">
          <div className="mission-main">
            <h2>Our Mission Statement</h2>
            <p className="mission-statement">
              To provide comprehensive support, education, and resources that empower individuals 
              and communities to overcome addiction, prevent substance abuse, and build healthier, 
              more fulfilling lives. We are committed to breaking the cycle of addiction through 
              prevention, intervention, treatment support, and recovery programs.
            </p>
          </div>

          <div className="mission-objectives">
            <h2>What We Aim To Achieve</h2>
            <div className="objectives-grid">
              <div className="objective-card">
                <div className="objective-icon">🎯</div>
                <h3>Prevention</h3>
                <p>Educate communities about the dangers of addiction and implement prevention programs, especially targeting youth and vulnerable populations.</p>
              </div>
              <div className="objective-card">
                <div className="objective-icon">💚</div>
                <h3>Support</h3>
                <p>Provide accessible counseling, peer support, and resources to individuals and families affected by addiction.</p>
              </div>
              <div className="objective-card">
                <div className="objective-icon">🏥</div>
                <h3>Treatment Access</h3>
                <p>Facilitate access to quality treatment services and recovery programs for those seeking help.</p>
              </div>
              <div className="objective-card">
                <div className="objective-icon">🤝</div>
                <h3>Community Building</h3>
                <p>Create supportive community networks that foster long-term recovery and prevent relapse.</p>
              </div>
              <div className="objective-card">
                <div className="objective-icon">📚</div>
                <h3>Education</h3>
                <p>Raise awareness and provide evidence-based information about addiction, recovery, and healthy living.</p>
              </div>
              <div className="objective-card">
                <div className="objective-icon">🌟</div>
                <h3>Advocacy</h3>
                <p>Advocate for policies and resources that support addiction prevention, treatment, and recovery at all levels.</p>
              </div>
            </div>
          </div>

          <div className="mission-cta">
            <h2>Join Our Mission</h2>
            <p>Be part of the change. Together we can make a difference.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Support Our Mission</Link>
              <Link to="/volunteer" className="btn btn-secondary">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

