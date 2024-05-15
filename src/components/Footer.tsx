import Image from "next/image";
import fb from "/public/images/fb.png";
import insta from "/public/images/insta.png";
import twitter from "/public/images/Group.png";
import lin from "/public/images/Linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full h-[182px] bg-white  md:grid place-content-center text-black">
      <div className="md:max-w-6xl md:mx-auto">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4 mb-2 mx-auto">
            <Image src={fb} alt="fb" />
            <Image src={insta} alt="insta" />
            <Image src={twitter} alt="twitter" />
            <Image src={lin} alt="lin" />
          </div>
          <p className="text-sm text-[#21243D]">
            Copyright ©2020 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
