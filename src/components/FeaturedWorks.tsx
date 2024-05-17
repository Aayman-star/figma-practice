import Image from "next/image";
import Img from "/public/images/Rectangle 30.png";
import Img1 from "/public/images/Rectangle 32.png";
import Img2 from "/public/images/Rectangle 34.png";
import FeaturedWork from "./FeaturedWork";
import Wrapper from "./Wrapper";
const dataMobile = [
  {
    id: 1,
    img: Img,
    title: "Designing Dashboards",
    year: "2020",
    label: "Dashboard",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];
const dataMd = [
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
    <Wrapper>
      <section className="w-full">
        <h4 className="text-lg md:text-[1.375rem] text-black py-4 text-center md:text-left md:ml-[9.25rem]">
          Featured works
        </h4>
        {/* <Image src={Img} alt="Featured Work Image" /> */}
        {dataMobile.map((item, id) => (
          <div className="md:hidden">
            {" "}
            <FeaturedWork key={item.id} {...item} />
          </div>
        ))}
        {dataMd.map((item, id) => (
          <div className="hidden md:block">
            {" "}
            <FeaturedWork key={item.id} {...item} />
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default FeaturedWorks;
