const Hero = () => {
  return (
    <div className="bg-accent pt-4 pb-5">
      <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
        <div className="d-lg-flex justify-content-between pb-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="index.html">
                    <i className="ci-home" />
                    Home
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Products</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
