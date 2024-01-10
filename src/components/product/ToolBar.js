import React from 'react'

const ToolBar = () => {
  return (
    <div className="bg-light shadow-lg rounded-3 mt-n5 mb-4">
  <div className="d-flex align-items-center ps-2">
    {/* Search*/}
    <div className="input-group">
      <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-md ms-3" />
      <input
        className="form-control border-0 shadow-none"
        type="text"
        placeholder="Search in this category..."
      />
    </div>
    {/* Sort*/}
    <div className="d-flex align-items-center">
      <div className="dropdown py-4 border-start">
        <a
          className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
          href="#"
          data-bs-toggle="dropdown"
        >
          <span className="d-inline-block py-1">
            <i className="ci-thumb-up align-middle opacity-60 mt-n1 me-2" />
            Popular
          </span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              <i className="ci-flag me-2 opacity-60" />
              Newest
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="ci-rocket me-2 opacity-60" />
              Bestsellers
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="ci-loading me-2 opacity-60" />
              Updated
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="ci-arrow-down me-2 opacity-60" />
              Low Price
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="ci-arrow-up me-2 opacity-60" />
              High Price
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Pagination*/}
    <div className="d-none d-md-flex align-items-center border-start ps-4">
      <span className="fs-md text-nowrap me-4">Pages&nbsp; 1 / 5</span>
      <a className="nav-link-style p-4 border-start" href="#">
        <span className="d-inline-block py-1">
          <i className="ci-arrow-left" />
        </span>
      </a>
      <a className="nav-link-style p-4 border-start" href="#">
        <span className="d-inline-block py-1">
          <i className="ci-arrow-right" />
        </span>
      </a>
    </div>
  </div>
</div>

  )
}

export default ToolBar