import { useState, useEffect } from "react";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import img from "../../src/assets/Whatsapp/whatsapp.png";

const DirectCon = () => {
  // Default position at bottom-right
  const [position, setPosition] = useState({
    x: 20, // Left side
    y: window.innerHeight - 100, // Bottom
  });
  const [isDragging, setIsDragging] = useState(false);

  // Update position if window resizes (to prevent going off-screen)
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 50),
        y: Math.min(prev.y, window.innerHeight - 50),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];

    setPosition({
      x: Math.max(10, Math.min(touch.clientX - 25, window.innerWidth - 50)), // Prevent going off screen (X-axis)
      y: Math.max(10, Math.min(touch.clientY - 25, window.innerHeight - 50)), // Prevent going off screen (Y-axis)
    });
  };

  return (
    <div>
      <div
        className="z-50 flex flex-col space-y-3"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
        }}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
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
