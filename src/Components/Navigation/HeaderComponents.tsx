import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../CSS/Header.css";

const HeaderComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById("navbarContent");
      const toggler = document.getElementById("menu-toggler");
      if (
        menuOpen &&
        menu &&
        !menu.contains(e.target as Node) &&
        toggler &&
        !toggler.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        menu.classList.remove("show");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand fw-bold" to="/">
          S.A Construction
        </NavLink>
        <button
          id="menu-toggler"
          className={`navbar-toggler animated-toggler ${menuOpen ? "open" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          id="navbarContent"
          className={`mobile-menu ${menuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav gap-lg-3">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/projects", label: "Projects" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/blog", label: "Blog" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item mt-3 mt-lg-0">
              <button className="btn btn-primary book-btn">
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HeaderComp;
