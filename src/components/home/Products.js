import React from 'react'

const Products = () => {
  return (
    <section className="container pb-5 mb-lg-3">
  {/* Heading*/}
  <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
    <h2 className="h3 mb-0 pt-3 me-2">The most recent releases</h2>
    <div className="pt-3">
      <select className="form-select me-2">
        <option>All categories</option>
        <option>Photos</option>
        <option>Graphics</option>
        <option>UI Design</option>
        <option>Web Themes</option>
        <option>Fonts</option>
        <option>Add-Ons</option>
      </select>
    </div>
  </div>
  {/* Grid*/}
  <div className="row pt-2 mx-n2">
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      {/* Product*/}
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/01.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                Createx Std.{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                UI Design
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-half active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">
              Square Style Mobile UI Kit (Sketch)
            </a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              153<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $24.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/04.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                Createx Std.{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                Graphics
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">
              Flat-line E-Commerce Icons (AI)
            </a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              26<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $18.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/09.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                pixels{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                UI Design
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">Isometric Device Mockups (PSD)</a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              36<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $16.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/10.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                theDesigner{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                Graphics
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">Coffe Paper Cup Mockup</a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              57<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $10.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/06.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                Createx Std.{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                Graphics
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">
              Travel &amp; Landmark Icon Pack (AI)
            </a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              21<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $17.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/05.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                Createx Std.{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                UI Design
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">
              Minimal Mobile App UI Kit (Sketch)
            </a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              117<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $23.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/11.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                pixels{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                Graphics
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-half active" />
              <i className="star-rating-icon ci-star" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">Printed T-Shirt Mockup (PSD)</a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              94<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $12.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product*/}
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href="marketplace-single.html"
            >
              <i className="ci-eye" />
            </a>
            <button
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              type="button"
            >
              <i className="ci-cart" />
            </button>
          </div>
          <a className="product-thumb-overlay" href="marketplace-single.html" />
          <img src="img/marketplace/products/12.jpg" alt="Product" />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                pixels{" "}
              </a>
              in{" "}
              <a className="product-meta fw-medium" href="#">
                Graphics
              </a>
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star-filled active" />
              <i className="star-rating-icon ci-star" />
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href="marketplace-single.html">
              Corporate Branding Mockup (PSD)
            </a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              122<span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              $18.<small>00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* More button*/}
  <div className="text-center">
    <a className="btn btn-outline-accent" href="marketplace-category.html">
      View more products
      <i className="ci-arrow-right fs-ms ms-1" />
    </a>
  </div>
</section>

  )
}

export default Products