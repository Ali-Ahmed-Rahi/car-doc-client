import { useLoaderData } from "react-router-dom";
import ServiceBanner from "../components/Service/ServiceBanner";
import ServiceCategory from "../components/Service/ServiceCategory";
import ServiceDetails from "../components/Service/ServiceDetails";
import SmCategory from "../components/Service/SmCategory";

const Service = () => {
  const services = useLoaderData(); // this useloaderdata give her children data automatically
  return (
    <div className="space-y-5 md:space-y-10">
      <ServiceBanner services={services}></ServiceBanner>
      <div className="flex flex-col md:flex-row max-w-7xl md:mx-auto md:gap-10">
        <div className="md:w-4/5 order-2 md:order-1">
          <ServiceDetails></ServiceDetails>
        </div>
        <div className="md:w-1/5 order-1 md:order-2">
          <div className="md:hidden block">
            <SmCategory services={services}></SmCategory>
          </div>
          <div className="hidden md:block">
            <ServiceCategory services={services}></ServiceCategory>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
