import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div>
      <Product title="Laptop" price={32000} />
      <Product title="Phone" price={3000} />
      <Product title="Pen" price={100} />
    </div>
  );
}

export default ProductTab;
