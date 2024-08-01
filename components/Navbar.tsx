import type { NextPage } from "next";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  return (
    <nav
      className={`bg-aliceblue py-9 px-12 sticky top-0 z-50 w-full text-midnightblue-100 font-inter ${className}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-extrabold">Tek Yantra</h2>
        <div className="flex gap-[85px]">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-lg font-extrabold cursor-pointer">
              Services
            </a>
            <a href="/" className="text-lg font-extrabold cursor-pointer">
              Projects
            </a>
            <a href="/" className="text-lg font-extrabold cursor-pointer">
              Blogs
            </a>
            <a href="/" className="text-lg font-extrabold cursor-pointer">
              Youtube
            </a>
            <a href="/" className="text-lg font-extrabold cursor-pointer">
              Contact
            </a>
          </div>
          <div className="h-[78px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute top-[27px] left-[0px] [background:linear-gradient(0deg,_#e7effa,_rgba(255,_255,_255,_0))] w-[1440px] h-[51px]" />
          </div>
          {/* 
          <button className="cursor-pointer [border:none] py-4 px-5 bg-blueviolet rounded-[25px] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumslateblue">
            <a className="[text-decoration:none] relative text-mini leading-[18px] font-extrabold font-inter text-white text-left inline-block min-w-[51px]">
              Sign in
            </a>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
