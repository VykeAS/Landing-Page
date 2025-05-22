const Jumbotron = () => {
  return (
    <section className="jumbotron text-center py-6 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">Master the Magic Universe</h1>
            <p className="lead mb-4">
              Join millions of players worldwide in the ultimate trading card game experience. 
              Build decks, battle opponents, and climb the ranks in epic tournaments.
            </p>
            <button className="btn btn-lg btn-warning px-5 py-3">
              Start Your Journey <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;