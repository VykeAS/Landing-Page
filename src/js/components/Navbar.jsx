import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top" 
         style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" style={{ letterSpacing: '1px' }}>
          <i className="fas fa-magic me-2"></i>MagicHub
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Tournaments</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Decks</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;