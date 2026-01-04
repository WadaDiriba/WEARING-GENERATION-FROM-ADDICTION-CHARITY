import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from '../../assets/Picture1.png';
import image2 from '../../assets/Picture2.png';
import image3 from '../../assets/Picture3.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: image1,
      title: 'Transforming Lives',
      description: 'Empowering individuals to overcome addiction'
    },
    {
      id: 2,
      image: image2,
      title: 'Building Communities',
      description: 'Creating stronger, healthier communities together'
    },
    {
      id: 3,
      image: image3,
      title: 'Hope for Tomorrow',
      description: 'A brighter future free from addiction'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="home">
      {/* Image Carousel Section */}
      <section className="image-carousel">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h2 className="slide-title">{slide.title}</h2>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="carousel-button carousel-button-next" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Weaning Generation From Addiction</h1>
          <p className="hero-subtitle">
            Empowering communities, transforming lives, and building a brighter future free from addiction.
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/volunteer" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">How We Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Our Mission</h3>
              <p>Providing support and resources to help individuals overcome addiction and lead fulfilling lives.</p>
              <Link to="/about/mission" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Our Vision</h3>
              <p>A world where every generation is free from the chains of addiction and can thrive.</p>
              <Link to="/about/vision" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Our Goal</h3>
              <p>To create sustainable programs that prevent addiction and support recovery in communities worldwide.</p>
              <Link to="/about/goal" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Together, We Can Make a Difference</h2>
          <p>Your support can change lives. Join us in our mission to create a generation free from addiction.</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary">Donate</Link>
            <Link to="/partnership" className="btn btn-outline">Partner With Us</Link>
            <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

