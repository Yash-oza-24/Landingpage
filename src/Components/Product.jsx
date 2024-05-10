import "./Product.css";

const Product = () => {
  return (
    <div className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Product 1</h3>
            <div className="product">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sint nobis expedita perferendis omnis nesciunt.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Product 2</h3>
            <div className="product">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptatibus molestiae, libero nostrum facilis reiciendis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Product 3</h3>
            <div className="product">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                et minima amet reiciendis culpa quo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
