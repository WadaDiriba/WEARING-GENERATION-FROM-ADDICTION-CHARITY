import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Dedicated to transforming lives and building communities free from addiction</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p className="lead-text">
              Weaning Generation From Addiction is a leading charity organization committed to 
              empowering individuals, families, and communities to overcome addiction and build 
              healthier, more fulfilling lives. Since our founding, we have been at the forefront 
              of prevention, education, and recovery support.
            </p>
            <p>
              Our organization brings together passionate professionals, dedicated volunteers, and 
              compassionate supporters who believe in the power of transformation. We work tirelessly 
              to break the cycle of addiction through comprehensive programs that address prevention, 
              intervention, treatment support, and long-term recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Compassion</h3>
              <p>We approach every individual with empathy, understanding, and respect, recognizing that addiction affects people from all walks of life.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Commitment</h3>
              <p>We are dedicated to providing continuous support and resources to help individuals on their journey to recovery.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We believe in the power of community and work together to create supportive networks that foster healing and growth.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Hope</h3>
              <p>We maintain an unwavering belief in the possibility of recovery and transformation for every individual.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Integrity</h3>
              <p>We operate with transparency, honesty, and ethical standards in all our programs and operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Innovation</h3>
              <p>We continuously evolve our approaches and programs to meet the changing needs of those we serve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Links */}
      <section className="goals-section">
        <div className="container">
          <h2>Our Foundation</h2>
          <div className="goals-grid">
            <Link to="/about/mission" className="goal-card">
              <div className="goal-icon">🌱</div>
              <h3>Our Mission</h3>
              <p>Learn about our purpose and what drives us every day to make a difference.</p>
              <span className="goal-link">Learn More →</span>
            </Link>
            <Link to="/about/vision" className="goal-card">
              <div className="goal-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>Discover our vision for a future free from the chains of addiction.</p>
              <span className="goal-link">Learn More →</span>
            </Link>
            <Link to="/about/goal" className="goal-card">
              <div className="goal-icon">🎯</div>
              <h3>Our Goals</h3>
              <p>Explore the specific goals we're working towards to achieve our mission.</p>
              <span className="goal-link">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <h2>Our Story</h2>
            <div className="history-text">
              <p>
                Founded with a vision to create lasting change, Weaning Generation From Addiction 
                began as a small community initiative. Over the years, we have grown into a 
                comprehensive organization serving thousands of individuals and families across 
                multiple communities.
              </p>
              <p>
                Our journey has been marked by countless success stories, community partnerships, 
                and the unwavering dedication of our team and volunteers. We continue to expand 
                our reach, develop innovative programs, and strengthen our impact on addiction 
                prevention and recovery.
              </p>
              <p>
                Today, we stand as a beacon of hope for those struggling with addiction, offering 
                support, resources, and pathways to recovery that transform lives and build 
                stronger, healthier communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Us in Our Mission</h2>
          <p>Together, we can make a difference. Get involved today and be part of the change.</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/volunteer" className="btn btn-secondary">Volunteer</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

