import { heebo } from "@/utils/fonts";
import Link from "next/link";
const Header = () => {
  const navLinks = ["Works", "Blog", "Contact"];
  return (
    <header className="fixed w-full h-50  p-4 md:p-6 bg-white">
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-18 absolute right-4 bottom-2 text-black">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="hidden md:flex md:items-center md:max-w-6xl md:mx-auto  md:text-black">
        <div className="w-3/4"></div>
        <div className={`${heebo.className} w-1/4`}>
          <ul className="flex justify-between w-full font-medium text-xl">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
