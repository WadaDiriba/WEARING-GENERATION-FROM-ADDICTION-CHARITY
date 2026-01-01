import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Testimonial.css';

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Recovery Success Story',
      image: '👩',
      quote: 'This organization saved my life. The support, counseling, and community I found here gave me the strength to overcome my addiction. Today, I\'m two years sober and helping others on their journey.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Family Member',
      image: '👨',
      quote: 'When my brother was struggling with addiction, we felt lost. The educational programs and family support services helped us understand and support him through recovery. He\'s now been clean for 18 months.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Youth Program Participant',
      image: '👧',
      quote: 'The prevention program at my school changed how I think about drugs and alcohol. The workshops were engaging and really helped me understand the risks. I\'m grateful for this education.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Volunteer',
      image: '👨‍💼',
      quote: 'Volunteering here has been one of the most rewarding experiences of my life. I\'ve seen firsthand how our programs transform lives. The impact we make together is incredible.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Community Partner',
      image: '👩‍💼',
      quote: 'Our organization partnered with them for a community outreach program, and the results exceeded our expectations. Their expertise and dedication to the cause are remarkable.',
      rating: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Recovery Success Story',
      image: '👨‍🎓',
      quote: 'After years of struggling, I finally found hope here. The peer support groups and counseling services provided the foundation I needed. I\'ve rebuilt my life, my relationships, and my future.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="testimonial-page">
      <section className="testimonial-hero">
        <div className="container">
          <h1>Success Stories & Testimonials</h1>
          <p>Hear from those whose lives have been transformed through our programs</p>
        </div>
      </section>

      <section className="testimonials-showcase">
        <div className="container">
          <div className="testimonial-carousel">
            <div className="testimonial-main">
              <button className="carousel-btn prev-btn" onClick={prevTestimonial}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <div className="testimonial-card active">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonials[currentTestimonial].image}</div>
                  <div className="testimonial-info">
                    <h3>{testimonials[currentTestimonial].name}</h3>
                    <p className="testimonial-role">{testimonials[currentTestimonial].role}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>

              <button className="carousel-btn next-btn" onClick={nextTestimonial}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-grid-section">
        <div className="container">
          <h2>More Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-grid-card">
                <div className="grid-avatar">{testimonial.image}</div>
                <div className="grid-rating">{renderStars(testimonial.rating)}</div>
                <blockquote className="grid-quote">"{testimonial.quote}"</blockquote>
                <div className="grid-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Recovery Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Lives Transformed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Be Part of Our Success Stories</h2>
          <p>Join us in transforming lives and creating more success stories.</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/volunteer" className="btn btn-secondary">Volunteer</Link>
            <Link to="/contact" className="btn btn-outline">Get Help</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

