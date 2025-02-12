import {  useLoaderData } from "react-router-dom";



const ServiceDetails = () => {
  const service=useLoaderData()
  
  if (!service) {
    return <div>Error: Service not found</div>;
  }
  const {img,title,description,facility}=service
  
  return (
    <div className=" space-y-10 text-black">
      <img className="w-full h-96 object-cover rounded-t-3xl" src={img} alt="" />
      <div className="space-y-10">
        <h2 className="text-5xl font-bold text-center">{title}</h2>
        <p className="font-medium ">{description}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {facility?.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-md p-10 border-t-4 border-t-orange-500">
              <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
              <p className="text-black">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;