import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark pt-5">
      <div className="container pt-2 pb-3">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-4">
            <div className="text-nowrap mb-3">
              <a className="d-inline-block align-middle mt-n2 me-2" href="#">
                Sanaa Art Shop
              </a>
            </div>
            <p className="fs-sm text-white opacity-70 pb-1">
              Providing Art to the community.
            </p>
            {/*<h6 className="d-inline-block pe-3 me-3 border-end border-light">
              <span className="text-primary">65,478 </span>
              <span className="fw-normal text-white">Products</span>
            </h6>
            <h6 className="d-inline-block pe-3 me-3 border-end border-light">
              <span className="text-primary">2,521 </span>
              <span className="fw-normal text-white">Members</span>
            </h6>
            <h6 className="d-inline-block me-3">
              <span className="text-primary">897 </span>
              <span className="fw-normal text-white">Vendors</span>
  </h6>*/}
            <div className="widget mt-4 text-md-nowrap text-center text-md-start">
              <a className="btn-social bs-light bs-twitter me-2 mb-2" href="#">
                <i className="ci-twitter" />
              </a>
              <a className="btn-social bs-light bs-facebook me-2 mb-2" href="#">
                <i className="ci-facebook" />
              </a>
              {/*<a className="btn-social bs-light bs-dribbble me-2 mb-2" href="#">
                <i className="ci-dribbble" />
              </a>
              <a className="btn-social bs-light bs-behance me-2 mb-2" href="#">
                <i className="ci-behance" />
              </a>
              <a
                className="btn-social bs-light bs-pinterest me-2 mb-2"
                href="#"
              >
                <i className="ci-pinterest" />
</a>*/}
            </div>
          </div>
          {/* Mobile dropdown menu (visible on screens below md)*/}
          <div className="col-12 d-md-none text-center mb-4 pb-2">
            <div className="btn-group dropdown d-block mx-auto mb-3">
              <button
                className="btn btn-outline-light border-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </button>
              <ul className="dropdown-menu my-1">
                <li>
                  <a className="dropdown-item" href="#">
                    Photos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Themes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fonts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Add-Ons
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-group dropdown d-block mx-auto">
              <button
                className="btn btn-outline-light border-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                For members
              </button>
              <ul className="dropdown-menu my-1">
                <li>
                  <a className="dropdown-item" href="#">
                    Licenses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Return policy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Payment methods
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Become a vendor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Become an affiliate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marketplace benefits
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Desktop menu (visible on screens above md)*/}
          {/*<div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div className="widget widget-links widget-light pb-2">
              <h3 className="widget-title text-light">Categories</h3>
              <ul className="widget-list">
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Photos
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Graphics
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    UI Design
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Web Themes
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Fonts
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Add-Ons
                  </a>
                </li>
              </ul>
            </div>
          </div>*/}
          <div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div className="widget widget-links widget-light pb-2">
              <h3 className="widget-title text-light">For members</h3>
              <ul className="widget-list">
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Licenses
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Return policy
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Payment methods
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Become a vendor
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Become an affiliate
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="#">
                    Marketplace benefits
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Second row*/}
      <div className="pt-5 bg-darker">
        <div className="container">
          <div
            className="widget w-100 mb-4 pb-3 text-center mx-auto"
            style={{ maxWidth: "28rem" }}
          >
            <h3 className="widget-title text-light pb-1">
              Subscribe to newsletter
            </h3>
            <form
              className="subscription-form validate"
              action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate=""
            >
              <div className="input-group flex-nowrap">
                <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                <input
                  className="form-control rounded-start"
                  type="email"
                  name="EMAIL"
                  placeholder="Your email"
                  required=""
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  name="subscribe"
                >
                  Subscribe*
                </button>
              </div>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  className="subscription-form-antispam"
                  type="text"
                  name="b_c7103e2c981361a6639545bd5_29ca296126"
                  tabIndex={-1}
                />
              </div>
              <div className="form-text text-light opacity-50">
                *Receive early discount offers, updates and new products info.
              </div>
              <div className="subscription-status" />
            </form>
          </div>
          <hr className="hr-light mb-3" />
          <div className="d-md-flex justify-content-between pt-4">
            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
              © All rights reserved. Made by{" "}
              <a
                className="text-light"
                href="https://createx.studio/"
                target="_blank"
                rel="noopener"
              >
                Createx Studio
              </a>
            </div>
            <div className="widget widget-links widget-light pb-4">
              <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Help Center
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Affiliates
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Support
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
