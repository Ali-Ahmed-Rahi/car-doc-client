import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const ServiceBanner = () => {
  return (
    <div className="relative w-full h-56 bg-gray-900 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/Y7Qt6bMb/checkout.png')",
          opacity: 0.5,
        }}
      ></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full space-y-5">
        <h1 className="text-white text-5xl font-bold  w-full text-center">Service Details</h1>
        <div className="text-orange-600 text-6xl w-full top-3/4 flex justify-center items-center animate-bounce ">
        <MdOutlineKeyboardDoubleArrowDown />
        </div>
      
      </div>
    </div>
  );
};

export default ServiceBanner;
