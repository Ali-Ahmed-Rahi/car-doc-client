import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      className="mySwiper"
    >
      <div>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-lg" src={img1} alt="Car servicing" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-black to-transparent lg:flex items-center justify-start md:p-10 lg:p-16">
              <div className="text-white space-y-6">
                <h2 className="md:text-5xl font-bold">
                  Affordable <br /> Price For Car Servicing
                </h2>
                <p className="font-medium">
                  There are many variations of passages of <br /> available, but
                  the majority have suffered alteration in some form
                </p>
                <button className="p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-3">
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-lg" src={img2} alt="Car servicing" />
            <div className="hidden lg:block">
            <div className=" absolute inset-0 bg-gradient-to-tr from-black to-transparent lg:flex items-center justify-start md:p-10 lg:p-16">
              <div className="text-white space-y-6">
                <h2 className="md:text-5xl font-bold">
                  Affordable <br /> Price For Car Servicing
                </h2>
                <p className="font-medium">
                  There are many variations of passages of <br /> available, but
                  the majority have suffered alteration in some form
                </p>
                <button className="p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-3">
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-lg" src={img3} alt="Car servicing" />
            <div className="hidden lg:block">
            <div className=" absolute inset-0 bg-gradient-to-tr from-black to-transparent lg:flex items-center justify-start md:p-10 lg:p-16">
              <div className="text-white space-y-6">
                <h2 className="md:text-5xl font-bold">
                  Affordable <br /> Price For Car Servicing
                </h2>
                <p className="font-medium">
                  There are many variations of passages of <br /> available, but
                  the majority have suffered alteration in some form
                </p>
                <button className="p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-3">
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-lg" src={img5} alt="Car servicing" />
            <div className="hidden lg:block">
            <div className=" absolute inset-0 bg-gradient-to-tr from-black to-transparent lg:flex items-center justify-start md:p-10 lg:p-16">
              <div className="text-white space-y-6">
                <h2 className="md:text-5xl font-bold">
                  Affordable <br /> Price For Car Servicing
                </h2>
                <p className="font-medium">
                  There are many variations of passages of <br /> available, but
                  the majority have suffered alteration in some form
                </p>
                <button className="p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-3">
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full rounded-lg" src={img6} alt="Car servicing" />
            <div className="hidden lg:block">
            <div className=" absolute inset-0 bg-gradient-to-tr from-black to-transparent lg:flex items-center justify-start md:p-10 lg:p-16">
              <div className="text-white space-y-6">
                <h2 className="md:text-5xl font-bold">
                  Affordable <br /> Price For Car Servicing
                </h2>
                <p className="font-medium">
                  There are many variations of passages of <br /> available, but
                  the majority have suffered alteration in some form
                </p>
                <button className="p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center gap-3">
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        
      </div>
    </Swiper>
  );
};

export default Banner;
