import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../Provider/Provider";

const Testimonial = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="text-center space-y-5">
        <h4 className="text-xl text-orange-600 font-bold">Testimonial</h4>
        <h2 className="text-5xl font-bold">
          Wha<span className="text-orange-500">t</span> Ou
          <span className="text-orange-500">r</span> Customer
          <span className="text-orange-500">s</span> Sa
          <span className="text-orange-500">y</span>
        </h2>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="pt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <section className="my-8 ">
              <div className="container">
                <div className="flex flex-col mx-4 my-6 border rounded-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-orange-500">
                    <p className="relative px-6 py-1 text-lg italic text-center text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-default-400 dark:text-white"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam iste excepturi ullam aliquam assumenda! Sunt iusto
                      unde eaque similique esse minima beatae! A saepe officiis,
                      dignissimos sint voluptate reprehenderit consectetur.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-default-400 dark:text-default-600"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-white space-y-3 text-black">
                    <img
                      src={user?.photoURL ? user.photoURL : <FaCircleUser />}
                      alt="avatar"
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full border border-black "
                    />
                    <p className="text-xl font-semibold leading-tight">
                      Distinctio Animi
                    </p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="my-8 ">
              <div className="container">
                <div className="flex flex-col mx-4 my-6 border rounded-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-orange-500">
                    <p className="relative px-6 py-1 text-lg italic text-center text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-default-400 dark:text-white"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam iste excepturi ullam aliquam assumenda! Sunt iusto
                      unde eaque similique esse minima beatae! A saepe officiis,
                      dignissimos sint voluptate reprehenderit consectetur.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-default-400 dark:text-default-600"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-white space-y-3 text-black">
                    <img
                      src={user?.photoURL ? user.photoURL : <FaCircleUser />}
                      alt="avatar"
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full border border-black "
                    />
                    <p className="text-xl font-semibold leading-tight">
                      Distinctio Animi
                    </p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="my-8 ">
              <div className="container">
                <div className="flex flex-col mx-4 my-6 border rounded-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-orange-500">
                    <p className="relative px-6 py-1 text-lg italic text-center text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-default-400 dark:text-white"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam iste excepturi ullam aliquam assumenda! Sunt iusto
                      unde eaque similique esse minima beatae! A saepe officiis,
                      dignissimos sint voluptate reprehenderit consectetur.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-default-400 dark:text-default-600"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-white space-y-3 text-black">
                    <img
                      src={user?.photoURL ? user.photoURL : <FaCircleUser />}
                      alt="avatar"
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full border border-black "
                    />
                    <p className="text-xl font-semibold leading-tight">
                      Distinctio Animi
                    </p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="my-8 ">
              <div className="container">
                <div className="flex flex-col mx-4 my-6 border rounded-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-orange-500">
                    <p className="relative px-6 py-1 text-lg italic text-center text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-default-400 dark:text-white"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam iste excepturi ullam aliquam assumenda! Sunt iusto
                      unde eaque similique esse minima beatae! A saepe officiis,
                      dignissimos sint voluptate reprehenderit consectetur.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-default-400 dark:text-default-600"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-white space-y-3 text-black">
                    <img
                      src={user?.photoURL ? user.photoURL : <FaCircleUser />}
                      alt="avatar"
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full border border-black "
                    />
                    <p className="text-xl font-semibold leading-tight">
                      Distinctio Animi
                    </p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
