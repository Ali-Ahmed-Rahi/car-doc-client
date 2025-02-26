import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/logo.svg";
import { ScaleLoader } from "react-spinners";

const ServiceCategory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [active, setActive] = useState([false]);

  // Fetch the services data from API
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
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getServices();
  }, []);

  // Select a service when clicked
  const handleServiceClick = (id, index) => {
    const service = services.find((service) => service._id === id);
    setSelectedService(service);
    setActive(index);
  };

  if (loading)
    return (
      <ScaleLoader color="#fd9205" className="h-screen w-screen mx-24 mt-40" />
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" max-w-xs mx-auto space-y-4">
      {/* Services Section */}
      <div className="bg-black  rounded-xl shadow-sm p-7 border">
        <h2 className="font-bold text-lg text-center text-white">Services</h2>
        <div className="space-y-2 mt-3  ">
          {services.map((service, index) => (
            <Link
              to={`/service/${service._id}`}
              key={index}
              className={`btn w-48 font-bold ${
                active === index
                  ? "bg-red-500 text-white hover:bg-orange-600"
                  : "bg-white text-black"
              }`}
              onClick={() => handleServiceClick(service._id, index)}
            >
              {service.title}{" "}
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-black p-4 rounded-xl text-white shadow-sm">
        <h2 className="font-semibold text-lg text-center">Download</h2>
        <div className="space-y-2 mt-3">
          {["Our Brochure", "Company Details"].map((item, index) => (
            <button
              key={index}
              className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-sm font-medium"
            >
              <div>
                <p>{item}</p>
                <p className="text-xs text-gray-400">Download</p>
              </div>
              <span className="text-xl bg-orange-500 p-1 rounded-2xl">
                <FaArrowRight />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Car Doctor Section */}
      <div className="bg-black p-6 rounded-xl text-white text-center shadow-sm">
        <div className="flex justify-center mb-3">
          <img src={img} alt="" />
        </div>
        <p className="text-white text-sm mt-1">
          Need Help? We Are Here To Help You
        </p>
        <div className="bg-white text-black p-3 rounded-lg mt-3">
          <p className="text-sm font-semibold">
            <span className="text-red-500">Car Doctor Special</span>
          </p>
          <p className="text-xs text-gray-500">
            Save up to{" "}
            <span className="text-red-500 font-semibold">60% off</span>
          </p>
        </div>
      </div>

      {/* Price Section */}
      {selectedService ? (
        <div className="text-center ">
          <p className="text-lg font-semibold mb-5">
            Price: ${selectedService.price}
          </p>
          <Link
            to={`/checkout/${selectedService._id}`}
            className="bg-red-500 text-white w-full p-3 rounded-lg font-semibold"
          >
            Proceed Checkout
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold bg-orange-600 text-white p-4 rounded-lg">
            Select a service to view price
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCategory;
