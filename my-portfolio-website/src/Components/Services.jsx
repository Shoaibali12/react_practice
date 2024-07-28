import Card from "./Card";
import heart from "../img/heartemoji.png";
import glasses from "../img/glasses.png";
import resume from "../img/resume.pdf";

export default function Services() {
  return (
    <>
      <div className="serivices -mt-5 flex  flex-1 h-screen">
        <div className="s-left flex-1 flex flex-col ">
          <span className="child1">My awesome</span>
          <span className="name">Services</span>
          <span className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            perferendis culpa tempora consequatur aliquam vero corrupti pariatur
            aspernatur et quia molestiae maxime magni, aperiam aut adipisci
            distinctio rerum iusto veniam?
          </span>
          <span>
            <a href={resume} download>
              <button className="btn mt-16">Download CV</button>
            </a>
          </span>
        </div>
        <div className="cards flex-1 relative ml-16">
          <div className=" left-56">
            <Card
              image={heart}
              heading={"Design"}
              detail={"Figame, Sketch, Photoshop, Adobe, adobe xd"}
            />
          </div>
          <div style={{ top: "6rem", left: "-4rem" }}>
            <Card
              image={glasses}
              heading={"Developer"}
              detail={"HTML, CSS, JS, React js and tailwind "}
            />
          </div>
          <div style={{ top: "16rem", left: "11rem" }}>
            <Card
              image={glasses}
              heading={"Developer"}
              detail={"HTML, CSS, JS, React js and tailwind "}
            />
          </div>
        </div>
      </div>
    </>
  );
}
