import React from "react";
import Wrapper from "../Wrapper";
// import WorkGallery from "./WorkGallery";
import { heebo } from "@/utils/fonts";
import Img from "/public/images/Rectangle 30.png";
import Img1 from "/public/images/Rectangle 31.png";
import Image from "next/image";
const WorksLst = [
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
    title: "Designing Landing pages",
    year: "2018",
    label: "Website",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];

const Works = () => {
  return (
    <Wrapper>
      <section className="w-full h-full md:px-28">
        <h3
          className={`${heebo.className} font-bold text-3xl md:text-[2.75rem] text-[#21243D] mb-10 md:mt-10`}>
          Work
        </h3>
        {/* Main div to house the Content and the line break */}
        <div>
          {/* Div for content */}
          <div className="flex flex-col space-y-10">
            {WorksLst.map((item, id) => (
              <div
                key={item.id}
                className={`${heebo.className} text-[#21243D] mb-10 md:flex md:space-x-10`}>
                <Image src={item.img} alt="work" />
                <div className="md:w-1/2 md:flex flex-col md:justify-around">
                  <h4 className="font-bold text-[1.875rem] my-2">
                    {item.title}
                  </h4>
                  <div className="flex item-center space-x-10 mb-4">
                    <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
                      {item.year}
                    </p>
                    <p className="text-[#8695A4] text-base">{item.label}</p>
                  </div>

                  <p className="mb-2"> {item.text}</p>
                  {/* <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" /> */}
                </div>
                <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4 md:hidden" />
                {/* <hr className="w-full  text-[#E0E0E0]" /> */}
              </div>
              //    <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" />
            ))}
            {/* <div className="w-full bg-green-500">
              <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" />
            </div> */}
          </div>
          {/* Div for line break */}
          {/* <div>
            <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" />
          </div> */}
        </div>
      </section>
    </Wrapper>
  );
};

export default Works;
// {/* {WorksLst.map((item, id) => (
//   <div
//     key={item.id}
//     className={`${heebo.className} text-[#21243D] mb-10 md:flex md:space-x-10`}>
//     <Image src={item.img} alt="work" />
//     <div className="md:w-1/2 md:flex flex-col md:justify-around">
//       <h4 className="font-bold text-[1.875rem] my-2">{item.title}</h4>
//       <div className="flex item-center space-x-10 mb-4">
//         <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
//           {item.year}
//         </p>
//         <p className="text-[#8695A4] text-base">{item.label}</p>
//       </div>

//       <p className="mb-2"> {item.text}</p>
//       {/* <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" /> */}
//     </div>
//     <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4 md:hidden" />
//     {/* <hr className="w-full  text-[#E0E0E0]" /> */}
//   </div>
//   //    <hr className="w-full h-px bg-[#E0E0E0] border-0 md:mt-4" />
// ))} */}
WorksLst.map((item, id) => (
  <div className="w-full" key={item.id}>
    <div className="md:flex items-center">
      <Image src={item.img} alt="work" />
      <div className="md:w-1/2">
        <h4 className="font-bold text-[1.875rem] my-2">{item.title}</h4>
      </div>
    </div>
    <hr className="w-full h-[2px] bg-black" />
  </div>
));
