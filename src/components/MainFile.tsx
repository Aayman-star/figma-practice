import Header from "./Header";
import Hero from "./Hero";
import Blog from "./Blog";
import FeaturedWorks from "./FeaturedWorks";
import Footer from "./Footer";

const MainFile = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Hero />
      <Blog />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};

export default MainFile;
