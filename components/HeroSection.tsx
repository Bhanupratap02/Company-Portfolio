import type { NextPage } from "next";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[708px] relative bg-aliceblue overflow-hidden shrink-0 max-w-full text-left  text-midnightblue-100 font-inter mq800:h-auto mq800:min-h-[708] ${className}`}
    >
      <div className="absolute w-[calc(100%_-_720px)] top-[94.2px] right-[-72px] left-[792px] h-[720px] z-[1]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/homeheader2png@2x.png"
        />
        <div className="absolute top-[-25.2px] left-[-21.6px] w-[669.6px] h-[741.6px]">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-blueviolet w-[741.6px]" />
          <img
            className="absolute top-[54.4px] left-[55.1px] w-[241.5px] h-[461.3px] overflow-hidden object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/figure.png"
          />
        </div>
      </div>
      <h1 className="m-0 absolute top-[134.8px] left-[162px] text-inherit tracking-[-1.2px] leading-[75px] font-extrabold font-inherit flex items-center w-[595.2px] z-[1] mq800:text-29xl mq800:leading-[60px] mq450:text-17xl mq450:leading-[45px] text-[60px]">
        Your growth is our mission
      </h1>
      <div className="absolute top-[336.8px] left-[162px] text-xl leading-[30px] flex items-center w-[597.9px] h-[82px] z-[1] mq450:text-base mq450:leading-[24px]">
        Think your phone has been hacked? Our trusted apps make it easy for you
        to scan, detect and remove threats from your iPhone and Android devices.
      </div>
      <div className="absolute top-[422.8px] left-[162px] w-[603.5px] h-[150.5px] overflow-hidden flex flex-row items-start justify-start pt-24 px-0 pb-0 box-border max-w-full z-[2] mq800:h-auto">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start pt-0 pb-6 pr-12 pl-0 box-border gap-[48px] shrink-0 max-w-full">
          <button className="cursor-pointer [border:none] pt-4 px-5 pb-[15.5px] bg-goldenrod flex-1 rounded-[25px] overflow-hidden flex flex-row items-start justify-start box-border min-w-[175px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 relative">
              <div className="relative text-lgi leading-[23px] font-extrabold font-inter text-midnightblue-100 text-left whitespace-nowrap">
                Get Certo for iPhone
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-4 pb-[15.5px] pr-[25px] pl-5 bg-gray shadow-[0px_0px_0px_2px_#02033b_inset] rounded-[25px] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
            <div className="relative text-lgi leading-[23px] font-extrabold font-inter text-midnightblue-100 text-left">
              Get Certo for Android
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
