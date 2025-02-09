import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Services from "../components/Home/Services/Services";


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-40">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;