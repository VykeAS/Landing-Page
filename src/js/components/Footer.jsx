const Footer = () => {
  return (
    <footer className="bg-dark py-5 mt-6">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="text-white mb-4">MagicHub</h5>
            <p className="text-muted">Your portal to the world of Magic: The Gathering.</p>
          </div>
          <div className="col-lg-4">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Tournaments</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Card Database</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Deck Builder</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="text-white mb-4">Connect</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-discord fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-4 border-secondary"/>
        <p className="text-center text-muted mb-0">&copy; 2024 MagicHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;