import gitImg from "../img/github.png";
import lnkdn from "../img/linkedin.png";
import insta from "../img/instagram.png";
import boy from "../img/boy.png";
import vec1 from "../img/Vector1.png";
import vec2 from "../img/Vector2.png";
import FloatingDiv from "./FloatingDiv";
import thumb from "../img/thumbup.png";
import glassesimoji from "../img/glassesimoji.png";

import crown from "../img/crown.png";
export default function Intro() {
  return (
    <>
      <div className="mt-16 flex-1 flex ">
        <div className="right flex-1 flex flex-col gap-4">
          <span className="child1">Hi! I am</span>
          <span className=" name">Shoaib Ali</span>
          <span className="intro">
            I am web developer with two year experience in software house,
            producing Quality work
          </span>
          <span>
            <button className="btn font-bold">Hire me</button>
          </span>
          <div className="flex gap-8 mt-10">
            <img src={gitImg} alt="img" className="w-8 h-8 cursor-pointer" />
            <img src={lnkdn} alt="img" className="w-8 h-8 cursor-pointer" />
            <img src={insta} alt="img" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>

        <div className="left flex-1 relative mt-6 left-16">
          <img src={vec1} alt="img" className="  scale-69 -left-15p -top-16p" />
          <img src={vec2} alt="img" className="  scale-67 -left-12 -top-20" />
          <img src={boy} alt="img" className=" scale-1 left-16 -top-10" />
          <img
            src={glassesimoji}
            alt=""
            className=" scale-50 -top-24 -left-36"
          />
          <div className=" -top-10 left-45p">
            <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
          </div>
          <div className=" top-52 -left-12 ">
            <FloatingDiv image={thumb} txt1="Best Design" txt2="Award" />
          </div>
          <div
            className="blur"
            style={{ backgroundColor: "rgb(238 210 255" }}
          ></div>
        </div>
      </div>
    </>
  );
  5;
}
