import wave from "../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
  return (
    <>
      <div className="footer -mt-28">
        <img src={wave} alt="" className="w-full" />
        <div className="f-content absolute ">
          <span className="mt-4">shoaib3398@gmail.com</span>
          <div className="icons flex justify-center gap-8 mt-16">
            <Insta color="white" size="3rem" />
            <Facebook color="white" size="3rem" />
            <Github color="white" size="3rem" />
          </div>
        </div>
      </div>
    </>
  );
}
