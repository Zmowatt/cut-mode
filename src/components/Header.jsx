import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Cut Mode</h1>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>

        <NavLink to="/dashboard" style={styles.link}>
          Dashboard
        </NavLink>

        <NavLink to="/suggestions" style={styles.link}>
          Suggestions
        </NavLink>

        <NavLink to="/settings" style={styles.link}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "black",
    borderBottom: "3px solid MediumSlateBlue",
  },
  logo: {
    margin: 0,
    color: "lime",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Header;