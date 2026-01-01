
import styles from "./Navbar.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    
     
     <nav>
        <img src={logo} alt=""> </img>

          <ul>


            <li> Home</li>
            <li> About</li>
            // Our Mission
            //OUR Vision
            // Goal
            <li>Take in Action</li>
            //Donate
            // Partnership
            //Volunter


            <li> Tesmonial </li>
            <li>Contact us</li>
          </ul>
     </nav>

  );
};

export default Navbar;
