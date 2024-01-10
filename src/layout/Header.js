/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <header className="bg-light shadow-sm navbar-sticky">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a
            className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1"
            href="index.html"
          >
            <img src="img/logo-dark.png" width={142} alt="Cartzilla" />
          </a>
          <a
            className="navbar-brand d-sm-none me-2 order-lg-1"
            href="index.html"
          >
            <img src="img/logo-icon.png" width={74} alt="Cartzilla" />
          </a>
          {/* Toolbar*/}
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a
              className="navbar-tool d-none d-lg-flex"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#searchBox"
              role="button"
              aria-expanded="false"
              aria-controls="searchBox"
            >
              <span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-search" />
              </div>
            </a>
            <a
              className="navbar-tool d-none d-lg-flex"
              href="dashboard-favorites.html"
            >
              <span className="navbar-tool-tooltip">Favorites</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-heart" />
              </div>
            </a>
            <div className="navbar-tool dropdown ms-2">
              <a
                className="navbar-tool-icon-box border dropdown-toggle"
                href="dashboard-sales.html"
              >
                <img
                  src="img/marketplace/account/avatar-sm.png"
                  width={32}
                  alt="Createx Studio"
                />
              </a>
              <a className="navbar-tool-text ms-n1" href="dashboard-sales.html">
                <small>Createx Std.</small>$1,375.00
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <div style={{ minWidth: "14rem" }}>
                  <h6 className="dropdown-header">Account</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-settings.html"
                  >
                    <i className="ci-settings opacity-60 me-2" />
                    Settings
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-purchases.html"
                  >
                    <i className="ci-basket opacity-60 me-2" />
                    Purchases
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-favorites.html"
                  >
                    <i className="ci-heart opacity-60 me-2" />
                    Favorites<span className="fs-xs text-muted ms-auto">4</span>
                  </a>
                  <div className="dropdown-divider" />
                  <h6 className="dropdown-header">Seller Dashboard</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-sales.html"
                  >
                    <i className="ci-dollar opacity-60 me-2" />
                    Sales
                    <span className="fs-xs text-muted ms-auto">$1,375.00</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-products.html"
                  >
                    <i className="ci-package opacity-60 me-2" />
                    Products<span className="fs-xs text-muted ms-auto">5</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-add-new-product.html"
                  >
                    <i className="ci-cloud-upload opacity-60 me-2" />
                    Add New Product
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="dashboard-payouts.html"
                  >
                    <i className="ci-currency-exchange opacity-60 me-2" />
                    Payouts
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="account-signin.html"
                  >
                    <i className="ci-sign-out opacity-60 me-2" />
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-tool ms-4">
              <a
                className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                href="marketplace-cart.html"
              >
                <span className="navbar-tool-label">3</span>
                <i className="navbar-tool-icon ci-cart" />
              </a>
            </div>
          </div>
          <div
            className="collapse navbar-collapse me-auto order-lg-2"
            id="navbarCollapse"
          >
            {/* Search*/}
            <div className="input-group d-lg-none my-3">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3" />
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="Search marketplace"
              />
            </div>
            {/* Categories dropdown*/}
            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ps-lg-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="ci-menu align-middle mt-n1 me-2" />
                  Categories
                </a>
                <ul className="dropdown-menu py-1">
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Photos
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="marketplace-category.html">
                          All Photos
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Abstract
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Animals
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Architecture
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Beauty &amp; Fashion
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Business
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Food &amp; Drink
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Holidays
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Industrial
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          People
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Sports
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Technology
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Graphics
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="#">
                          All Graphics
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Icons
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Illustartions
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Patterns
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Textures
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Web Elements
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      UI Design
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="marketplace-category.html">
                          All UI Design
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          PSD Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Sketch Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Adobe XD Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Figma Templates
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Web Themes
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="marketplace-category.html">
                          All Web Themes
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          WordPress Themes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Bootstrap Themes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          eCommerce Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Muse Templates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Plugins
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Fonts
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="marketplace-category.html">
                          All Fonts
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Blackletter
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Display
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Non Western
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Sans Serif
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Script
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Serif
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Slab Serif
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Symbols
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Add-Ons
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item product-title fw-medium">
                        <a href="marketplace-category.html">
                          All Add-Ons
                          <i className="ci-arrow-right fs-xs ms-1" />
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Photoshop Add-Ons
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Illustrator Add-Ons
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Sketch Plugins
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Procreate Brushes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          InDesign Palettes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Lightroom Presets
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="marketplace-category.html"
                        >
                          Other Software
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Primary menu*/}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Quick Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Search collapse*/}
      <div className="search-box collapse" id="searchBox">
        <div className="card pt-2 pb-4 border-0 rounded-0">
          <div className="container">
            <div className="input-group">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3" />
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="Search marketplace"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
