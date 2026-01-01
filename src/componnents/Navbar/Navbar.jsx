import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>WGAC</h2>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Donate</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
