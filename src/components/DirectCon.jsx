
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

const DirectCon = () => {
 
  return (
    <div>
      <div
        className="z-50 flex flex-col space-y-3 bottom-0 left-10 md:bottom-10 md:right-10 fixed"
        >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/88012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-12 h-8 w-8 md:h-12 rounded-lg bg-green-500 flex items-center justify-center shadow-lg transition"
        >
          <div className="text-white md:text-2xl">
          <IoLogoWhatsapp />
          </div>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+88012345678"
          className="md:w-12 h-8 w-8 md:h-12 rounded-lg bg-green-500 flex items-center justify-center shadow-lg transition"
        >
          <div className="text-white md:text-2xl">
            <IoCall />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DirectCon;
