import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bgVideo from '../../assets/nama.mp4';

const Home = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [counterValues, setCounterValues] = useState({
    livesImpacted: 0,
    communitiesServed: 0,
    volunteers: 0,
    successRate: 0
  });

  // Video loading and autoplay
  useEffect(() => {
    const video = videoRef.current;
    
    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
      setTimeout(() => setShowOverlay(true), 300);
      
      if (video) {
        video.play().catch(() => {
          console.log('Autoplay prevented - showing controls');
          video.controls = true;
        });
      }
    };

    if (video) {
      if (video.readyState >= 3) {
        handleVideoLoad();
      } else {
        video.addEventListener('loadeddata', handleVideoLoad);
        video.addEventListener('error', () => {
          console.error('Video failed to load');
          setIsVideoLoaded(true);
          setShowOverlay(true);
        });
      }

      return () => {
        video.removeEventListener('loadeddata', handleVideoLoad);
      };
    }
  }, []);

  // Animated counter effect
  useEffect(() => {
    const targets = {
      livesImpacted: 1000,
      communitiesServed: 50,
      volunteers: 10,
      successRate: 85
    };

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      
      setCounterValues({
        livesImpacted: Math.floor(targets.livesImpacted * progress),
        communitiesServed: Math.floor(targets.communitiesServed * progress),
        volunteers: Math.floor(targets.volunteers * progress),
        successRate: Math.floor(targets.successRate * progress)
      });

      if (frame === totalFrames) {
        clearInterval(timer);
        setCounterValues(targets);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, []);

  const transformationStories = [
    {
      id: 1,
      name: "Alex M.",
      timeline: "18 Months Sober",
      beforeText: "Before Recovery",
      afterText: "After Transformation"
    },
    {
      id: 2,
      name: "Jamie R.",
      timeline: "2 Years Transformed",
      beforeText: "Before Recovery",
      afterText: "After Transformation"
    },
    {
      id: 3,
      name: "Taylor K.",
      timeline: "3 Years Restoration",
      beforeText: "Before Recovery",
      afterText: "After Transformation"
    }
  ];

  return (
    <div className="home">
      {/* === VIDEO HERO SECTION === */}
      <section className="video-hero" aria-label="Hero video section">
        <div className="video-container">
          <video
            ref={videoRef}
            className={`bg-video ${isVideoLoaded ? 'loaded' : 'loading'}`}
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Background video showing our mission in action"
          />
          
          {!isVideoLoaded && (
            <div className="video-loading-overlay" role="status">
              <div className="loading-spinner">
                <div className="spinner" aria-hidden="true"></div>
                <p>Loading impactful content...</p>
              </div>
            </div>
          )}

          <div className={`video-content-overlay ${showOverlay ? 'visible' : ''}`}>
            <div className="video-hero-content">
              <h1 className="video-hero-title">
                <span className="title-line">Weaning Generation</span>
                <span className="title-line highlight">From Addiction</span>
              </h1>
              <p className="video-hero-subtitle">
                Transforming young African lives from addiction to purpose, hope, and sustainable futures
              </p>
              <div className="video-hero-cta">
                <Link to="/donate" className="btn btn-primary btn-hero">
                  <span className="btn-icon" aria-hidden="true">💚</span>
                  Support Our Mission
                </Link>
               
              </div>
            </div>
          </div>

          <div className="video-scroll-indicator">
            <span className="scroll-text">Scroll to explore</span>
            <div className="scroll-arrow" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* === MISSION STATEMENT SECTION === */}
      <section className="mission-statement">
        <div className="container">
          <div className="mission-content">
            <h2 className="mission-title">Our Commitment to Change</h2>
            <p className="mission-description">
              Through evidence-based programs, community partnerships, and sustainable interventions, 
              we're building a future where African youth can thrive free from addiction's chains.
            </p>
            <div className="mission-highlights">
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">🌍</div>
                <h3>Community Focused</h3>
                <p>Working within local communities for lasting impact</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">🔬</div>
                <h3>Evidence Based</h3>
                <p>Using proven methods for rehabilitation and recovery</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">🤝</div>
                <h3>Sustainable Solutions</h3>
                <p>Creating long-term change through empowerment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === IMPACT STATISTICS === */}
      <section className="impact-statistics">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle">Measurable change creating brighter futures</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{counterValues.livesImpacted}+</div>
              <div className="stat-label">Lives Impacted</div>
              <div className="stat-description">Youth empowered through our programs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counterValues.communitiesServed}+</div>
              <div className="stat-label">Communities Served</div>
              <div className="stat-description">Across African nations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counterValues.volunteers}+</div>
              <div className="stat-label">Dedicated Volunteers</div>
              <div className="stat-description">Making change possible</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counterValues.successRate}%</div>
              <div className="stat-label">Recovery Success</div>
              <div className="stat-description">Sustainable rehabilitation rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* === OUR APPROACH SECTION === */}
      <section className="our-approach">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Holistic Approach</h2>
            <p className="section-subtitle">
              Addressing addiction through multiple dimensions for sustainable transformation
            </p>
          </div>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon-wrapper">
                <span className="approach-icon" aria-hidden="true">🧠</span>
              </div>
              <h3>Cognitive Rehabilitation</h3>
              <p>Evidence-based therapy programs that rebuild thinking patterns and emotional resilience in recovering youth.</p>
              <Link to="/programs/cognitive" className="approach-link">
                Explore Methods
                <svg className="link-arrow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
            <div className="approach-card">
              <div className="approach-icon-wrapper">
                <span className="approach-icon" aria-hidden="true">🤝</span>
              </div>
              <h3>Community Integration</h3>
              <p>Creating supportive ecosystems where recovered individuals become mentors and community leaders.</p>
              <Link to="/programs/community" className="approach-link">
                Join Community
                <svg className="link-arrow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
            <div className="approach-card">
              <div className="approach-icon-wrapper">
                <span className="approach-icon" aria-hidden="true">💼</span>
              </div>
              <h3>Vocational Empowerment</h3>
              <p>Skill development and entrepreneurship programs that create sustainable livelihoods for transformed youth.</p>
              <Link to="/programs/vocational" className="approach-link">
                Build Skills
                <svg className="link-arrow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === TRANSFORMATION STORIES === */}
      <section className="transformation-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lives Transformed</h2>
            <p className="section-subtitle">
              Witness the journey from addiction to restoration through real stories of change
            </p>
          </div>
          <div className="stories-grid">
            {transformationStories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-image-container">
                  <div className="image-comparison">
                    <div className="image-before">
                      <div className="image-placeholder">
                        <span className="image-label">Before</span>
                      </div>
                    </div>
                    <div className="image-after">
                      <div className="image-placeholder">
                        <span className="image-label">After</span>
                      </div>
                    </div>
                    <div className="comparison-slider" aria-hidden="true"></div>
                  </div>
                </div>
                <div className="story-details">
                  <h3 className="client-name">{story.name}</h3>
                  <p className="recovery-timeline">{story.timeline}</p>
                  <p className="story-excerpt">
                    "Found hope and purpose through our rehabilitation program, now mentoring others in recovery."
                  </p>
                  <Link to={`/stories/${story.id}`} className="story-link">
                    Read Full Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="call-to-action">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Your Support Creates Lasting Change</h2>
            <p className="cta-description">
              Every contribution helps us reach more youth, build stronger communities, 
              and create sustainable solutions to addiction in Africa.
            </p>
            <div className="cta-actions">
              <Link to="/donate" className="btn btn-primary btn-cta">
                <span className="btn-icon" aria-hidden="true">💰</span>
                Make a Donation
              </Link>
              <Link to="/volunteer" className="btn btn-secondary btn-cta">
                <span className="btn-icon" aria-hidden="true">👥</span>
                Become a Volunteer
              </Link>
              <Link to="/Partnership" className="btn btn-outline btn-cta">
                <span className="btn-icon" aria-hidden="true">🤝</span>
                Partner With Us
              </Link>
            </div>
            <div className="transparency-note">
              <svg className="transparency-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>
                <strong>Transparency Promise:</strong> 92% of donations directly fund our programs
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;