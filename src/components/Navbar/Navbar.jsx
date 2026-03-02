import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../data/portfolioData";
import "./Navbar.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    
    <nav className="navbar" style={{ backgroundColor: theme.navBg, color: theme.text }}>
      <span className="navbar__logo" onClick={() => scrollTo("hero")}>
        VW
      </span>

      <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`navbar__link ${activeSection === link.toLowerCase() ? "navbar__link--active" : ""}`}
            onClick={() => scrollTo(link.toLowerCase())}
            style={{ color: theme.text }}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="navbar__actions">
        <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme.dark ? <SunnyIcon style={{color:"yellow"}} /> : <DarkModeIcon />}
        </button>
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon  style={{color:"white"}}/>
          
        </button>
      </div>
    </nav>
  );
}