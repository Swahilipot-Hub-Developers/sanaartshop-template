import ProductCard from "../product/ProductCard";

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* More button*/}
      <div className="text-center">
        <a className="btn btn-outline-accent" href="marketplace-category.html">
          View more products
          <i className="ci-arrow-right fs-ms ms-1" />
        </a>
      </div>
    </section>
  );
};

export default Products;
