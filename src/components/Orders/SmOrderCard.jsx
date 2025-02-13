

const SmOrderCard = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, service, price, img, status, customerName } = booking;
  return (
    <div className="card bg-base-100 ">
      <figure className="p-4">
        <img src={img} alt="Image" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="font-bold text-xl text-center">{customerName}</h2>
        <div className="flex items-center justify-between">
          <h2 className="card-title">{service}</h2>
          <h1>{date}</h1>
        </div>
        <p>${price}</p>
        <div className=" flex gap-5">
          <button onClick={() => handleDelete(_id)} className="p-2 w-40 rounded-lg text-white bg-red-700">Delete</button>
          {status === "confirm" ? (
          <span className="p-2 w-40 rounded-lg text-white bg-green-600 text-center">Confirmed</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)} className="p-2 w-40 rounded-lg text-white bg-orange-500">Please Confirm</button>
        )}
        </div>
      </div>
    </div>
  );

};


export default SmOrderCard;
