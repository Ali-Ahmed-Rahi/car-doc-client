import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServicesCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" p-8 flex justify-between items-center space-y-3">
        <div className="space-y-2">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-xl text-orange-500">Price: ${price}</p>
        </div>
        <div>
          <Link to={`/checkout/${_id}`} className="text-3xl text-orange-500">
            <FaCircleArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
ServicesCard.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ServicesCard;

