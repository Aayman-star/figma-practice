import React from "react";
import Wrapper from "../Wrapper";
// import WorkGallery from "./WorkGallery";
import { heebo } from "@/utils/fonts";
import Img from "/public/images/Rectangle 30.png";
import Img1 from "/public/images/Rectangle 31.png";
import Img2 from "/public/images/Rectangle 32.png";
import Img3 from "/public/images/Rectangle 34.png";
import Img4 from "/public/images/Rectangle 40.png";
import Image from "next/image";

import { WorksLst, worksList } from "@/utils/content";

const Works = () => {
  return (
    <Wrapper>
      <section className="w-full h-full md:px-28">
        <h3
          className={`${heebo.className} font-bold text-3xl md:text-[2.75rem] text-[#21243D] mb-10 md:mt-10`}>
          Work
        </h3>
        {WorksLst.map((item, id) => (
          <div className="w-full mb-4 text-[#21243D] md:hidden" key={item.id}>
            <div>
              <Image
                className="mb-4 md:flex items-center md:justify-between"
                src={item.img}
                alt="work"
              />
              <div className="flex flex-col  md:justify-around md:w-1/2">
                <h4 className="font-bold text-2xl my-2  text-[#21243D]">
                  {item.title}
                </h4>
                <div className="flex item-center space-x-10 mb-4">
                  <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
                    {item.year}
                  </p>
                  <p className="text-[#8695A4] text-base">{item.label}</p>
                </div>
                <p className="mb-2"> {item.text}</p>
              </div>
            </div>
            <hr className="w-full h-px bg-[#E0E0E0]" />
          </div>
        ))}
        {/* This arraay is for large screen sizes */}
        {worksList.map((item, id) => (
          <div
            className="hidden w-full mb-4 text-[#21243D] md:block"
            key={item.id}>
            <div className="mb-4 md:flex items-center md:space-x-10">
              <Image src={item.img} width={246} height={180} alt="work" />
              <div className="flex flex-col md:justify-around md:w-1/2">
                <h4 className="font-bold text-[1.875rem] my-2 text-[#21243D]">
                  {item.title}
                </h4>
                <div className="flex item-center space-x-10 mb-4">
                  <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
                    {item.year}
                  </p>
                  <p className="text-[#8695A4] text-base">{item.label}</p>
                </div>
                <p className="mb-2"> {item.text}</p>
              </div>
            </div>
            <hr className="w-full h-px bg-[#E0E0E0]" />
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default Works;
