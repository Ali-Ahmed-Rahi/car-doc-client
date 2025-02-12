import img1 from "../../assets/icons/group.svg";
import img2 from "../../assets/icons/Group 38729.svg";
import img3 from "../../assets/icons/person.svg";
import img4 from "../../assets/icons/Wrench.svg";
import img5 from "../../assets/icons/deliveryt.svg";
import img6 from "../../assets/icons/check.svg";

const WhyChooseUs = () => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-5xl font-bold text-center py-5">Why Choose <span className="text-orange-500">Us</span></h2>
        <p className="text-center">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable. </p>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          <div className="card  lg:w-96 bg-base-100 hover:shadow-xl "> 
            <figure className="px-10 pt-10">            
              <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Expert Technicians</h2>            
            </div>
          </div>
          <div className="card lg:w-96 bg-orange-600 hover:shadow-xl"> 
            <figure className="px-10 pt-10">            
              <img src={img2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Professional Staff</h2>            
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 hover:shadow-xl"> 
            <figure className="px-10 pt-10">            
              <img src={img3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">24/7 Service</h2>            
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 hover:shadow-xl"> 
            <figure className="px-10 pt-10">            
              <img src={img4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Best Equipment</h2>            
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 hover:shadow-xl"> 
            <figure className="px-10 pt-10">            
              <img src={img5} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Timely Delivery</h2>            
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 hover:shadow-xl"> 
            <figure className="px-10 pt-10">            
              <img src={img6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">100% Satisfaction</h2>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;