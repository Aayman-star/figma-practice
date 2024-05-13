import Image from "next/image";
import heroImg from "/public/images/Group 1.png";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section
      className={`${heebo.className} w-full min-h-screen text-black bg-white flex flex-col items-center justify-evenly`}>
      <Image className="mt-11" src={heroImg} alt="hero-image" />
      <div className="w-[312px] h-[120px]">
        {" "}
        <h1
          className={` font-bold text-[32px] text-[#21243D] text-center leading-10 `}>
          Hi, I am John, Creative Technologist
        </h1>
      </div>
      <p className="w-[328px] h-[96px] text-center text-base text-[#21243D]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button className="w-[208px] h-[47px] bg-[#FF6464] text-white font-medium text-xl mb-16">
        Download Resume
      </button>
    </section>
  );
};

export default Hero;
