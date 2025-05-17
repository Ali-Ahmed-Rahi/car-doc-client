import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const SmCategory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getServices() {
      try {
        const response = await fetch(
          "https://car-doctor-server-omega-six-54.vercel.app/services"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    }

    getServices();
  }, []);

  if (loading)
    return (
      <ScaleLoader color="#fd9205" className="h-screen w-screen mx-24 mt-40" />
    );

  return (
    <div className="p-5 bg-black rounded-t-lg">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/service/${service._id}`}
              className=" text-xl md:text-base text-center mx-auto text-white bg-orange-500 hover:bg-orange-600 w-40  h-14 flex items-center justify-center rounded-lg"
            >
              {service.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmCategory;
