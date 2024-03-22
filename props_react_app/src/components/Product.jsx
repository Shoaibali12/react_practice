import "./product.css";

function Product({ title, price }) {
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>price: {price}</p>
      {price > 30000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Product;
