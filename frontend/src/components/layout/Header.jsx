import "./Header.css";
import log from "../../assets/logo-sora.png";

import {
  Home,
  ClipboardList,
  Moon,
  Phone,
  ShoppingCart,
  LogIn,
} from "lucide-react";

function Header() {
  return (
    
    <header className="header_container">
      {/* Première partie : Navbar */}
      <div className="header_top">
        <a className="logo" href="/">
          <img src={log} alt="Sora Sushi Logo" />
        </a>

        {/* Navigation */}
        <nav className="header_nav">
          <a className="nav_link active" href="/">
            <Home size={18} />
            <span>Accueil</span>
          </a>

          <a className="nav_link" href="/orders">
            <ClipboardList size={18} />
            <span>Mes commandes</span>
          </a>
        </nav>

        {/* Actions */}
        <div className="header_actions">
          <button className="action_btn language_btn">FR</button>

          <button className="action_btn" aria-label="Mode sombre">
            <Moon size={20} />
          </button>

          <button className="action_btn" aria-label="Téléphone">
            <Phone size={20} />
          </button>

          <button className="action_btn" aria-label="Panier">
            <ShoppingCart size={20} />
          </button>

          <button className="login_btn">
            <LogIn size={17} />
            <span>Connexion</span>
          </button>
        </div>
      </div>

      
    </header>
    
  );
}

export default Header;
