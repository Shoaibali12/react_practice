import "./product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let NewPrice = ["8,999", "9,199", "899", "278"];
  let desc = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Touch Surface", "Designed for Ipad Pro"],
    ["Intuitive Touch Surface", "Designed for Ipad Pro"],
    ["Wirelesss Mouse 2.4GHz", "Optical Orientation"],
  ];
  return (
    <div className="prodcuts">
      <h4>{title}</h4>
      <p>{desc[idx][0]}</p>
      <p>{desc[idx][1]}</p>
      <Price oldP={oldPrice[idx]} NewP={NewPrice[idx]} />
    </div>
  );
}

export default Product;
