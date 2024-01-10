import React from "react";

const Toolbar = () => {
  return (
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100">
        <a
          className="d-table-cell handheld-toolbar-item"
          href="dashboard-favorites.html"
        >
          <span className="handheld-toolbar-icon">
            <i className="ci-heart" />
          </span>
          <span className="handheld-toolbar-label">Favorites</span>
        </a>
        <a
          className="d-table-cell handheld-toolbar-item"
          href="javascript:void(0)"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onclick="window.scrollTo(0, 0)"
        >
          <span className="handheld-toolbar-icon">
            <i className="ci-menu" />
          </span>
          <span className="handheld-toolbar-label">Menu</span>
        </a>
        <a
          className="d-table-cell handheld-toolbar-item"
          href="marketplace-cart.html"
        >
          <span className="handheld-toolbar-icon">
            <i className="ci-cart" />
            <span className="badge bg-primary rounded-pill ms-1">3</span>
          </span>
          <span className="handheld-toolbar-label">$56.00</span>
        </a>
      </div>
    </div>
  );
};

export default Toolbar;
