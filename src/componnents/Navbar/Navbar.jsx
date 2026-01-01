const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>WGAC</h2>
      <ul style={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Donate</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#2c3e50",
    color: "#fff",
  },
  ul: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
};

export default Navbar;
