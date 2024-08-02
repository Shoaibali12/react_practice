import Facebook from "../img/Facebook.png";
import fiverr from "../img/fiverr.png";
import Upwork from "../img/Upwork.png";
import Shopify from "../img/Shopify.png";
import amazon from "../img/amazon.png";

export default function Work() {
  return (
    <>
      <div className="work">
        <div className="s-left flex flex-col">
          <span className="child1">Work for all these</span>
          <span className="name">Brands and Clients</span>
          <span className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit. Quaerat perferendis culpa tempora
            <br />
            consequatur aliquam vero corrupti pariatur aspernatur <br />
            et quia molestiae maxime magni, <br />
            aperiam aut adipisci distinctio rerum iusto veniam?
          </span>
          <span>
            <button className="btn mt-6">Hire me</button>
          </span>
        </div>
        <div className="w-right ml-28">
          <div className="main-circle">
            <div className="sec-circle left-24 -top-12">
              <img src={Upwork} alt="" />
            </div>
            <div className="sec-circle top-20 -left-12">
              <img src={fiverr} alt="" />
            </div>
            <div className="sec-circle top-20 left-24">
              <img src={amazon} alt="" />
            </div>
            <div className="sec-circle left-60 top-20">
              <img src={Shopify} alt="" />
            </div>
            <div className="sec-circle top-52 left-24">
              <img src={Facebook} alt="" />
            </div>
          </div>
          <div
            className="blur scale-150 -left-8 top-16"
            style={{ backgroundColor: "rgba(234, 229, 236, 0.904)" }}
          ></div>
          <div className="w-backcircle blue bg-blue-700 -top-8  left-40 "></div>
          <div className="w-backcircle yellow bg-yellow-500 top-24 left-40"></div>
        </div>
      </div>
    </>
  );
}
