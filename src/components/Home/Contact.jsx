import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-black flex-col md:flex-row lg:flex  lg:justify-between p-10 md:p-20 rounded-lg space-y-5">
      <div className="flex items-center text-3xl text-orange-500">
      <RiCalendarScheduleFill />
        <div className="ml-5 text-lg text-white font-semibold">
          <p>We Are <span className="text-orange-500">Open 24/7</span></p>
          <p>7:00 AM to 09:00 PM</p>
        </div>
      </div>
      <div className="flex items-center text-3xl text-orange-500">
        <IoCallSharp />
        <div className="ml-5 text-lg text-white font-semibold">
          <p>Have a <span className="text-orange-500">question?</span></p>
          <p>+880 123 456 789</p>
        </div>
      </div>
      <div className="flex items-center text-3xl text-orange-500">
        <FaMapLocationDot />
        <div className="ml-5 text-lg text-white font-semibold">
          <p> Our <span className="text-orange-500">Location</span></p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
