import "../../CSS/Header.css";

const HeaderComp = () => {
  return (
    <header className="header">
        <div className="header-left">
          {/* <img
            src="/logo.png"
            alt="Company Logo"
            className="logo"
          /> */}
          <h4 className="company-name">S.A Construction</h4>
        </div>
        <div className="header-container">
        <nav className="header-right">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <button className="book-btn">Book Appointment</button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
