import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" />

      <ul className="ul">
        <li>Home</li>
        <li>About</li>
        {/* Our Mission */}
        {/* OUR Vision */}
        {/* Goal */}
        <li>Take Action</li>
        {/* Donate */}
        {/* Partnership */}
        {/* Volunteer */}
        <li>Testimonial</li>
        <li>Contact us</li>
      </ul>

      <button className="button">Donate</button>
      <button className="button">Contact us</button>
    </nav>
  );
};

export default Navbar;

