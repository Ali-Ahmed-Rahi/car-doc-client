import PropTypes from "prop-types";


const OrdersRow = ({ booking ,handleDelete,handleBookingConfirm}) => {
  const { _id, date, service, price, img, status, customerName, } = booking;


  return (
    <tr className="font-semibold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle bg-red-600 hover:bg-red-700 text-white hover:animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img ? (
              <img src={img} alt="Avatar Tailwind CSS Component" />
            ) : (
              <img src="" alt="Images" />
            )}
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{service}</td>
      <td>{date}</td>
      <td className="font-bold text-yellow-500">${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-green-500">Confirmed</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-sm bg-orange-500">Please Confirm</button>
        )}
      </th>
    </tr>
  );
};

OrdersRow.propTypes = {
  booking: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string,
    status: PropTypes.string.isRequired,
    }).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookingConfirm : PropTypes.func.isRequired,
    
};

export default OrdersRow;
