import Image from "next/image";
import heroMobile from "/public/images/Group 1.png";
import heroMd from "/public/images/Ellipse 1.png";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section
      className={`${heebo.className} w-full min-h-screen  bg-white  flex flex-col items-center justify-evenly md:max-w-6xl md:mx-auto md:flex-row-reverse md:items-center md:justify-around`}>
      <div className="">
        <Image className="mt-11 md:hidden" src={heroMobile} alt="hero-image" />
        <Image
          className="hidden md:block md:-mt-10"
          src={heroMd}
          alt="hero-image"
        />
      </div>

      <div className="flex flex-col items-center md:items-start space-y-10">
        {" "}
        <div className="w-[312px] h-[120px] md:w-[596px] md:h-[105px]">
          {" "}
          <h1
            className={` font-bold text-[32px]  text-[#21243D] text-center leading-10 md:text-[44px] md:leading-[60px] md:text-left`}>
            Hi, I am John, Creative Technologist
          </h1>
        </div>
        <p className="w-[328px] h-[96px] text-center text-base text-[#21243D] md:w-[497px] md:h-[66px] md:text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="w-[208px] h-[47px] bg-[#FF6464] text-white font-medium text-xl mb-16">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
