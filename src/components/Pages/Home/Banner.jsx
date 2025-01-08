import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import banner1 from "../../../assets/Banner1.jpg";
import banner2 from "../../../assets/Banner2.jpg";
import banner3 from "../../../assets/Banner3.jpg";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="banner-swiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative max-w-[1320px] mx-auto flex items-center justify-center h-[400px] lg:h-[600px]">
          <img
            src={banner1}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white p-8 rounded-md max-w-full">
            <h2 className="text-2xl lg:text-5xl font-bold">
              <Fade cascade damping={0.1}>Join the Marathon Events</Fade>
            </h2>
            <p className="mt-4 text-sm lg:text-lg">
              Be part of a platform that empowers dreams and supports meaningful causes.
            </p>
            <Link to="/register" className="btn btn-accent mt-6">
              Get Started
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative max-w-[1320px] mx-auto flex items-center justify-center h-[400px] lg:h-[600px]">
          <img
            src={banner2}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white p-8 rounded-md max-w-full">
            <h2 className="text-2xl lg:text-5xl font-bold">
              <Fade cascade damping={0.1}>Support Inspiring Campaigns</Fade>
            </h2>
            <p className="mt-4 text-sm lg:text-lg">
              Explore impactful campaigns and make a difference with your contributions.
            </p>
            <Link to="/marathons" className="btn btn-accent mt-6">
              Browse Marathon Events
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative max-w-[1320px] mx-auto flex items-center justify-center h-[400px] lg:h-[600px]">
          <img
            src={banner3}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white p-8 rounded-md max-w-full">
            <h2 className="text-2xl lg:text-5xl font-bold">
              <Fade cascade damping={0.1}>Start Your Marathon Campaign Today</Fade>
            </h2>
            <p className="mt-4 text-sm lg:text-lg">
              Raise funds for your cause or project and reach a global audience.
            </p>
            <Link to="/dashboard" className="btn btn-accent mt-6">
              Add Marathon Now
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
