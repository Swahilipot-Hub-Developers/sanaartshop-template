const ProductCard = ({
  id,
  name,
  imageUrl,
  creatorName,
  category,
  rating,
  sales,
  price,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
      <div className="card product-card-alt">
        <div className="product-thumb">
          <button className="btn-wishlist btn-sm" type="button">
            <i className="ci-heart" />
          </button>
          <div className="product-card-actions">
            <a
              className="btn btn-light btn-icon btn-shadow fs-base mx-2"
              href='/product-view'
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
          <a
            className="product-thumb-overlay"
            href={`marketplace-single.html?product=${id}`}
          />
          <img src={imageUrl} alt={name} />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
            <div className="text-muted fs-xs me-1">
              by{" "}
              <a className="product-meta fw-medium" href="#">
                {creatorName}
              </a>{" "}
              in{" "}
              <a className="product-meta fw-medium" href="#">
                {category}
              </a>
            </div>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`star-rating-icon ci-star-filled ${
                    i < rating ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <h3 className="product-title fs-sm mb-2">
            <a href={`marketplace-single.html?product=${id}`}>{name}</a>
          </h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="fs-sm me-2">
              <i className="ci-download text-muted me-1" />
              {sales}
              <span className="fs-xs ms-1">Sales</span>
            </div>
            <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
              KES {price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  id: 0,
  name: "Product Name",
  imageUrl: "img/marketplace/products/02.jpg",
  creatorName: "Default Creator",
  category: "Default Category",
  rating: 4.3,
  sales: 120,
  price: 500.0,
};

export default ProductCard;
