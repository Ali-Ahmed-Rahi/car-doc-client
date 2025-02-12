import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import OrdersRow from "./OrdersRow";
import Swal from "sweetalert2";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Orders = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
      });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          // upadated successfully
          const remaining=bookings.filter(booking=>booking._id!==id)
          const updated= bookings.find(booking=>booking._id===id)
          updated.status="confirm"
          const newBookings=[updated,...remaining]
          setBookings(newBookings)
        }
      });
  };
  return (
    <div className="space-y-20 ">
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
              <h1 className="text-white text-5xl font-bold  w-full text-center">Your Bookings</h1>
              <div className="text-orange-600 text-6xl w-full top-3/4 flex justify-center items-center animate-bounce ">
              <MdOutlineKeyboardDoubleArrowDown />
              </div>
            
            </div>
          </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Services</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <OrdersRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
