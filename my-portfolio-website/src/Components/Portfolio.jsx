import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../img/sidebar.png";
import ecommerce from "../img/ecommerce.png";
import musicapp from "../img/musicapp.png";
import hoc from "../img/hoc.png";
import "swiper/css";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio flex flex-col justify-center items-center">
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={sidebar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ecommerce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={musicapp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hoc} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
