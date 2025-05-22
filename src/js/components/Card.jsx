const Card = ({ title, description, image, rarity }) => {
  return (
    <div className="card h-100 border-0 shadow-lg hover-transform">
      <img 
        src={image}
        className="card-img-top" 
        alt={title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted mb-4">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <a href="#" className="btn btn-outline-primary">Explore Cards</a>
          <span 
            className={`badge px-3 py-2 text-uppercase`}
            style={{
              backgroundColor: '#facc15',
              color: '#1e293b',
              fontWeight: '600',
              fontSize: '0.75rem'
            }}
          >
            {rarity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
