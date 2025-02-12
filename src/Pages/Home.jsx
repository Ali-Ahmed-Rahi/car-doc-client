import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Services from "../components/Home/Services/Services";
import Team from "../components/Home/Team";
import Testimonial from "../components/Home/Testimonial";
import WhyChooseUs from "../components/Home/WhyChooseUs";



const Home = () => {
  return (
    <div className="max-w-7xl mx-auto lg:space-y-40 space-y-20" >
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <WhyChooseUs></WhyChooseUs>
      <Team></Team>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;