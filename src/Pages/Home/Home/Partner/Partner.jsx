/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Partner.css";

const Partner = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto partner my-15 py-9">
        <div className="container">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
            }}
          >
            <div className="row g-2 text-center">
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/ZSXXW4F/company-logo-01.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/bb2PBVw/company-logo-02.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/DK1bfh4/company-logo-03.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/dJfSJXb/company-logo-04.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/h9XmGQK/company-logo-05.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/zhYJd1c/company-logo-06.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/ZSXXW4F/company-logo-01.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/bb2PBVw/company-logo-02.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/DK1bfh4/company-logo-03.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/dJfSJXb/company-logo-04.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/h9XmGQK/company-logo-05.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img
                    src="https://i.ibb.co/zhYJd1c/company-logo-06.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;
