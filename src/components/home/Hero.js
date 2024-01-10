import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-accent bg-position-top-center bg-repeat-0 py-5"
      style={{ backgroundImage: "url(img/home/marketplace-hero.jpg)" }}
    >
      <div className="pb-lg-5 mb-lg-3">
        <div className="container py-lg-5 my-lg-5">
          <div className="row mb-4 mb-sm-5">
            <div className="col-lg-7 col-md-9 text-center text-sm-start">
              <h1 className="text-white lh-base">
                <span className="fw-light">Over</span> 1,500{" "}
                <span className="fw-light">curated</span> Design{" "}
                <span className="fw-light">resources</span>, Images, Graphic{" "}
                <span className="fw-light">&amp;</span> Website{" "}
                <span className="fw-light">templates</span>
              </h1>
              <h2 className="h5 text-white fw-light">
                High quality art created by our creative community
              </h2>
            </div>
          </div>
          <div className="row pb-lg-5 mb-4 mb-sm-5">
            <div className="col-lg-6 col-md-8">
              <div className="input-group input-group-lg flex-nowrap">
                <i className="ci-search position-absolute top-50 translate-middle-y ms-3" />
                <input
                  className="form-control rounded-start"
                  type="text"
                  placeholder="Start your search"
                />
                <button
                  className="btn btn-primary btn-lg dropdown-toggle fs-base"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  All categories
                </button>
                <div className="dropdown-menu dropdown-menu-end my-1">
                  <a className="dropdown-item" href="#">
                    Photos
                  </a>
                  <a className="dropdown-item" href="#">
                    Graphics
                  </a>
                  <a className="dropdown-item" href="#">
                    UI Design
                  </a>
                  <a className="dropdown-item" href="#">
                    Web Themes
                  </a>
                  <a className="dropdown-item" href="#">
                    Add-Ons
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
