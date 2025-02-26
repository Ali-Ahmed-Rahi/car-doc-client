import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("https://car-doctor-server-mocha-sigma.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="font-semibold space-y-16 ">
      <div className="relative w-full h-56 bg-black ">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/Y7Qt6bMb/checkout.png')",
            opacity: 0.5,
          }}
        ></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full space-y-5">
          <h1 className="text-white text-5xl font-bold  w-full text-center">
            {" "}
            {title}
          </h1>
        </div>
      </div>
      <div className="p-16 border bg-gray-300 shadow-2xl">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Massage</span>
            </label>
            <input
              type="text"
              name="massage"
              placeholder="Massage"
              required
              className="input input-bordered w-full h-24"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-orange-500 hover:bg-orange-600 btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default CheckOut;
