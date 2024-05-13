import Image from "next/image";
import Img from "/public/images/Rectangle 30.png";
import Img1 from "/public/images/Rectangle 32.png";
import Img2 from "/public/images/Rectangle 34.png";
import FeaturedWork from "./FeaturedWork";
const Data = [
  {
    id: 1,
    img: Img,
    title: "Designing Dashboards",
    year: "2020",
    label: "Dashboard",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    id: 2,
    img: Img1,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    label: "Illustration",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    id: 3,
    img: Img2,
    title: "36 Days of Malayalam type",
    year: "2018",
    label: "Typography",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];
const FeaturedWorks = () => {
  return (
    <section className="w-full bg-white md:max-w-6xl md:mx-auto text-black flex flex-col items-center">
      <h4 className="text-lg  py-4 md:self-start">Featured works</h4>
      {/* <Image src={Img} alt="Featured Work Image" /> */}
      {Data.map((item, id) => (
        <FeaturedWork key={item.id} {...item} />
      ))}
    </section>
  );
};

export default FeaturedWorks;
