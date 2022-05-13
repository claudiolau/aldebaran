import * as React from "react";
import styles from "./_navbar.module.scss";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

type NavbarProps = {
  navtitle: string[];
};

export const Navbar: React.FC<NavbarProps> = ({ navtitle }) => {
  return (
    <Router>
      <ul className={styles.navbar}>
        {navtitle.map((title, index) => {
          return (
            <>
              <li key={`${index}`}>
                <NavLink
                  key={`${index}`}
                  to={`/${title}`}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                  }
                >
                  {title}
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
    </Router>
  );
};
