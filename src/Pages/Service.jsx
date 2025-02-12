import { useLoaderData } from "react-router-dom";
import ServiceBanner from "../components/Service/ServiceBanner";
import ServiceCategory from "../components/Service/ServiceCategory";
import ServiceDetails from "../components/Service/ServiceDetails";

const Service = () => {
  const services = useLoaderData(); // this useloaderdata give her children data automatically
  return (
    <div className="space-y-10">
      <ServiceBanner services={services}></ServiceBanner>
      <div className="flex max-w-7xl gap-5 mx-auto">
        <div className=" w-4/5">
          <ServiceDetails></ServiceDetails>
        </div>
        <div className=" w-1/5">
          <ServiceCategory services={services}></ServiceCategory>
        </div>
      </div>
    </div>
  );
};

export default Service;
