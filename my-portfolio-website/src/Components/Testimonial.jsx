import React, { useState } from "react";
import profile1 from "../img/profile1.jpg";
import profile2 from "../img/profile2.jpg";
import profile3 from "../img/profile3.jpg";
import profile4 from "../img/profile4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonial() {
  const clients = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam quos voluptatem mollitia fuga officia voluptas quaerat sint distinctio aut repudiandae facere iure, accusamus soluta hic perspiciatis repellat officiis consequuntur",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam quos voluptatem mollitia fuga officia voluptas quaerat sint distinctio aut repudiandae facere iure, accusamus soluta hic perspiciatis repellat officiis consequuntur",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam quos voluptatem mollitia fuga officia voluptas quaerat sint distinctio aut repudiandae facere iure, accusamus soluta hic perspiciatis repellat officiis consequuntur",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam quos voluptatem mollitia fuga officia voluptas quaerat sint distinctio aut repudiandae facere iure, accusamus soluta hic perspiciatis repellat officiis consequuntur",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };
  return (
    <>
      <div className="t-wraper h-screen">
        <div className="t-heading self-start">
          <span>Clients always get </span>
          <span>Exceptional work </span>
          <span>from me..</span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        <Swiper
          slidesPerView={1}
          className="swiper-slide"
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          initialSlide={currentIndex}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="pagination-dots -mt-14">
          {clients.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
