import type { NextPage } from "next";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`relative bg-aliceblue w-screen h-[90vh] text-midnightblue-100 font-inter flex items-center ${className}`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between py-16 lg:py-24 px-0">
        <div className="lg:w-1/2 px-5 lg:px-14 text-center lg:text-left">
          {/* <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 uppercase text-left">
            Innovative Solutions for Business Growth
          </h1> */}
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 uppercase text-left ">
            Innovative Solutions for Business Growth
          </h1>
          <p className="text-xl lg:text-xl mb-8  text-midnightblue-100 text-left font-light ">
            We deliver comprehensive IT consulting services to help businesses
            achieve their goals through cutting-edge technology solutions.
          </p>
          <div className=" w-full  flex flex-col items-center justify-start ml-0 lg:flex-row gap-4 lg:gap-8">
            <button className=" w-2/3 lg:w-1/3 bg-midnightblue-100 text-aliceblue font-extrabold py-3 px-8 rounded-lg shadow hover:bg-aliceblue hover:text-midnightblue-100 uppercase">
              Get Started
            </button>
            <button className=" w-2/3 border-goldenrod lg:w-1/3 text-midnightblue-100 font-extrabold py-3 px-8 rounded-lg shadow hover:bg-blueviolet hover:text-aliceblue uppercase">
              Our Services
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 px-4 lg:px-0 flex justify-center lg:justify-end relative bg-inherit">
          <img
            src="/hero-img-3.svg"
            alt="Hero Image"
            className="relative z-10 w-full h-auto bg-transparent aspect-square object-contain object-left opacity-85"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
