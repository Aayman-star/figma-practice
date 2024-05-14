import Image, { StaticImageData } from "next/image";
import { heebo } from "@/utils/fonts";
type FeaturedWorkProps = {
  id: number;
  img: StaticImageData;
  title: string;
  year: string;
  label: string;
  text: string;
};
const FeaturedWork = ({
  id,
  img,
  title,
  year,
  label,
  text,
}: FeaturedWorkProps) => {
  return (
    <section className="w-full flex flex-col items-center md:max-w-6xl md:flex-row md:items-center  md:space-x-10 md:mb-4">
      {/* For the image */}
      <div className="w-[339px] h-[230px] mb-4 md:mb-0 md:w-[246px] md:h-[180px]">
        <Image className="w-full rounded-md" src={img} alt="work image" />
      </div>
      {/* For the data */}
      <div className="w-[344px] flex flex-col md:flex-1 md:h-[180px]  items-start md:justify-between">
        <h4 className="font-bold text-2xl text-left text-[#21243D] ">
          {title}
        </h4>
        <div className="flex items-center space-x-10 mt-2 mb-4">
          <div>
            <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
              {year}
            </p>
          </div>
          <div>
            <p className="text-[#8695A4] text-base">{label}</p>
          </div>
        </div>
        <p className="text-[#21243D] text-left text-base mb-2 md:w-[600px] md:h-[93px]">
          {text}
        </p>
      </div>
    </section>
  );
};

export default FeaturedWork;
// w-[344px] h-[455]
{
  /* <div className="w-[339px] h-[230px] md:w-[246px] md:h-[180px] mb-4">
        {" "}
        <Image className="w-full" src={img} alt="FeaturedWork" />
      </div>

      <div className={`${heebo.className} px-4 items-start flex flex-col`}>
        <p className="font-bold text-2xl text-left text-[#21243D]">{title}</p>
        <div className="flex items-center space-x-10 mt-2 mb-4">
          <div>
            <p className="bg-[#142850] text-white text-base font-black px-2 rounded-full">
              {year}
            </p>
          </div>
          <div>
            <p className="text-[#8695A4] text-base">{label}</p>
          </div>
        </div>
        <p className="text-[#21243D] text-left text-base">{text}</p>
      </div> */
}
