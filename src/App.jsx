import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Donate from './components/Donation/Donate';
import TakeAction from './components/TakeAction/TakeAction';
import About from './components/About/About';
import Mission from './components/About/Mission';
import Vision from './components/About/Vision';
import Goal from './components/About/Goal';
import Partnership from './components/Partnership/Partnership';
import Volunteer from './components/Volunteer/Volunteer';
import Testimonial from './components/Testimonial/Testimonial';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/goal" element={<Goal />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
