const Footer = () => {
  return (
    <div className="text-dark fw-semibold">
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-sub-footer"></section>

        <section className="pt-3 bg-footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 "></i>House Hunter
                </h6>
                <p className="">
                  Here you can find your expected Service. House Hunter is not
                  only the best Service provider.Target is to reach the highest
                  amount of client no one beat anywhere.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <a className="text-reset">Home</a>
                </p>

                <p>
                  <a className="text-reset">Blog</a>
                </p>
                <p>
                  <a to="/register" className="text-reset">
                    Register
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Mirpur, Dhaka
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  House Hunter
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
          <section className="d-flex justify-content-center align-items-center p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <div>
              <a className="me-4 link-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="me-4 link-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="me-4 link-secondary">
                <i className="fab fa-google"></i>
              </a>
              <a className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </section>

        <div className="text-center p-4 bg-footer">
          © 2021 Copyright:
          <a className="text-reset fw-bold">Hunter House by Rahi</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
