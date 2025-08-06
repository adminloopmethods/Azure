import React from "react";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-24 py-2.5 w-full bg-white h-[72px] max-md:px-12 max-md:py-2.5 max-sm:flex-col max-sm:gap-5 max-sm:px-5 max-sm:py-2.5 max-sm:h-auto">
      <div className="relative h-[62px] w-[122px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9c643ce246bc3e13dfa34dbeac13d715033afb06?width=244"
          alt=""
          className="object-cover h-[62px] w-[122px]"
        />
        <div className="absolute top-0 left-0 bg-black h-[62px] w-[122px]" />
      </div>
      <div className="flex gap-12 items-center max-sm:flex-col max-sm:gap-5 max-sm:w-full">
        <SearchBox />
        <div className="flex gap-10 items-center">
          <div className="flex gap-10 items-center max-sm:hidden">
            <div className="text-sm font-medium text-black underline cursor-pointer">
              Home
            </div>
            <div className="text-sm font-light text-black opacity-30 cursor-pointer">
              About
            </div>
            <div className="text-sm font-light text-black opacity-30 cursor-pointer">
              Contact Us
            </div>
            <div className="text-sm font-light text-black opacity-30 cursor-pointer">
              Blog
            </div>
          </div>
          <div className="flex justify-center items-center px-14 py-4 border border-black border-solid cursor-pointer h-[41px] rounded-[86px] max-sm:block">
            <div className="text-sm leading-6 text-center text-black">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
