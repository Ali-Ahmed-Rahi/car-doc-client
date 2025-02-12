import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import person1 from "../../assets/images/team/1.jpg";
import person2 from "../../assets/images/team/2.jpg";
import person3 from "../../assets/images/team/3.jpg";
import { AiFillInstagram } from "react-icons/ai";

const Team = () => {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-5xl font-bold text-center py-5">
          Meet Our <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        <div className="card lg:w-96 bg-base-100 shadow-xl space-y-2">
          <figure className="px-10 pt-10">
            <img src={person1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-4">
            <h2 className="card-title">Car Servicing Expert</h2>
            <div className="card-actions">
              <a className="btn rounded-full "><FaFacebook /></a>
              <a className="btn rounded-full "><FaTwitter /></a>
              <a className="btn rounded-full "><AiFillInstagram /></a>
              <a className="btn rounded-full "><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 bg-base-100 shadow-xl space-y-2">
          <figure className="px-10 pt-10">
            <img src={person2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-4">
            <h2 className="card-title">Car Engine Expert</h2>
            <div className="card-actions">
              <a className="btn rounded-full "><FaFacebook /></a>
              <a className="btn rounded-full "><FaTwitter /></a>
              <a className="btn rounded-full "><AiFillInstagram /></a>
              <a className="btn rounded-full "><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 bg-base-100 shadow-xl space-y-2">
          <figure className="px-10 pt-10">
            <img src={person3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-4">
            <h2 className="card-title">Car Testing Expert</h2>
            <div className="card-actions">
              <a className="btn rounded-full "><FaFacebook /></a>
              <a className="btn rounded-full "><FaTwitter /></a>
              <a className="btn rounded-full "><AiFillInstagram /></a>
              <a className="btn rounded-full "><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
