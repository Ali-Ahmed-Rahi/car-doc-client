import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const SmCategory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getServices() {
      try {
        const response = await fetch(
          "https://car-doctor-server-mocha-sigma.vercel.app/services"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (err) {
        console.log(err);
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
    <div className=" p-5 bg-black  grid grid-cols-2 gap-4 rounded-t-lg">
      {services.map((service, index) => (
        <Link to={`/service/${service._id}`} key={index} className="btn w-40 ">
          {service.title}
        </Link>
      ))}
    </div>
  );
};

export default SmCategory;
