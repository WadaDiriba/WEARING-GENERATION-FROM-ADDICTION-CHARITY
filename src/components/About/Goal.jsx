import { Link } from 'react-router-dom';
import './Goal.css';

const Goal = () => {
  return (
    <div className="goal-page">
      <section className="goal-hero">
        <div className="container">
          <h1>Our Goals</h1>
          <p>Specific objectives driving our mission forward</p>
        </div>
      </section>

      <section className="goal-content">
        <div className="container">
          <div className="goal-main">
            <h2>Our Strategic Goals</h2>
            <p className="goal-intro">
              Our goals are designed to create measurable, sustainable impact in the fight 
              against addiction. We focus on prevention, support, recovery, and community 
              building to achieve lasting change.
            </p>
          </div>

          <div className="goals-list">
            <div className="goal-item">
              <div className="goal-number">01</div>
              <div className="goal-details">
                <h3>Prevention & Education</h3>
                <p>
                  Reduce addiction rates by 30% in target communities through comprehensive 
                  prevention programs, educational initiatives, and early intervention strategies 
                  focused on youth and vulnerable populations.
                </p>
                <ul>
                  <li>Implement school-based prevention programs in 100+ schools</li>
                  <li>Reach 50,000+ youth with educational workshops</li>
                  <li>Train 500+ educators and community leaders</li>
                </ul>
              </div>
            </div>

            <div className="goal-item">
              <div className="goal-number">02</div>
              <div className="goal-details">
                <h3>Accessible Support Services</h3>
                <p>
                  Provide free and low-cost counseling, support groups, and resources to 
                  10,000+ individuals and families annually, ensuring no one is left without help.
                </p>
                <ul>
                  <li>Establish 25+ community support centers</li>
                  <li>Offer 24/7 helpline and crisis support</li>
                  <li>Provide online and in-person counseling options</li>
                </ul>
              </div>
            </div>

            <div className="goal-item">
              <div className="goal-number">03</div>
              <div className="goal-details">
                <h3>Recovery Success Rates</h3>
                <p>
                  Achieve 70%+ long-term recovery success rates through comprehensive treatment 
                  support, peer mentoring, and aftercare programs.
                </p>
                <ul>
                  <li>Support 5,000+ individuals in recovery annually</li>
                  <li>Maintain 12-month follow-up programs</li>
                  <li>Provide peer mentor matching for all participants</li>
                </ul>
              </div>
            </div>

            <div className="goal-item">
              <div className="goal-number">04</div>
              <div className="goal-details">
                <h3>Community Empowerment</h3>
                <p>
                  Build strong, supportive communities by engaging 10,000+ volunteers and 
                  establishing partnerships with 100+ organizations, businesses, and institutions.
                </p>
                <ul>
                  <li>Create volunteer networks in 50+ communities</li>
                  <li>Establish corporate partnerships</li>
                  <li>Develop community resource directories</li>
                </ul>
              </div>
            </div>

            <div className="goal-item">
              <div className="goal-number">05</div>
              <div className="goal-details">
                <h3>Research & Innovation</h3>
                <p>
                  Contribute to evidence-based practices by conducting research, evaluating 
                  programs, and sharing findings with the broader addiction recovery community.
                </p>
                <ul>
                  <li>Publish annual impact reports</li>
                  <li>Collaborate with research institutions</li>
                  <li>Develop innovative program models</li>
                </ul>
              </div>
            </div>

            <div className="goal-item">
              <div className="goal-number">06</div>
              <div className="goal-details">
                <h3>Sustainable Impact</h3>
                <p>
                  Create self-sustaining programs and funding models that ensure long-term 
                  viability and continued support for generations to come.
                </p>
                <ul>
                  <li>Establish endowment fund</li>
                  <li>Develop revenue-generating programs</li>
                  <li>Build diverse funding streams</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="goal-progress">
            <h2>Our Progress</h2>
            <div className="progress-grid">
              <div className="progress-item">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="progress-label">
                  <span>Prevention Programs</span>
                  <span>75%</span>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%' }}></div>
                </div>
                <div className="progress-label">
                  <span>Support Services</span>
                  <span>60%</span>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%' }}></div>
                </div>
                <div className="progress-label">
                  <span>Community Engagement</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="goal-cta">
            <h2>Help Us Achieve Our Goals</h2>
            <p>Together, we can reach these milestones and create lasting change.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Support Our Goals</Link>
              <Link to="/volunteer" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;

