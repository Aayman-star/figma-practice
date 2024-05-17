import Header from "./Header";
import Hero from "./Hero";
import Blog from "./Blog";
import FeaturedWorks from "./FeaturedWorks";
import Footer from "./Footer";

const MainFile = () => {
  return (
    <div className="bg-white w-full">
      <Hero />
      <Blog />
      <FeaturedWorks />
    </div>
  );
};

export default MainFile;
