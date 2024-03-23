import Product from "./Product";

function ProductTab() {
  let style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <Product title="Logitech MX Master" idx={0} />;
      <Product title="Apple Pencil (2nd Gen)" idx={1} />;
      <Product title="Zebronics" idx={2} />;
      <Product title="Petronics Toad" idx={3} />;
    </div>
  );
}

export default ProductTab;
