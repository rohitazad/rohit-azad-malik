import React from "react";

import Icon4 from "../../images/icon4.svg";
import Icon5 from "../../images/icon5.svg";

const HomeComponent = ({ data }) => {
  const aboutRohit = data.about;
  const whatIDo = data.what_i_do[0].web_development;
  const managment = data.what_i_do[1].managment;
  return (
    <>
      <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
        {/* about page title */}
        <h2 className="after-effect after:left-60">About Rohit</h2>

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              {aboutRohit.map((item, index) => {
                return (
                  <p
                    key={index + 1}
                    className="text-[#44566c] dark:text-color-910 leading-7 mt-2.5"
                  >
                    {item.title}
                  </p>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* what i do section start */}
      <div className="pb-12  sm:px-5 md:px-10 lg:px-14">
        <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
          {" "}
          What I do!{" "}
        </h3>
        <div className="grid gap-8 grid-cols-1">
          <div className="about-box bg-[#f3faff] dark:bg-transparent">
            <img
              className="w-10 h-10 object-contain block"
              src={Icon5}
              alt="icon"
            />
            <div className="space-y-2">
              <h3 className="dark:text-white text-[22px] font-semibold">
                {" "}
                Web Development{" "}
              </h3>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                {" "}
                {whatIDo}
              </p>
            </div>
          </div>

          <div className="about-box bg-[#fff0f8] dark:bg-transparent">
            <img
              className="w-10 h-10 object-contain block"
              src={Icon4}
              alt="icon"
            />
            <div className="space-y-2">
              <h3 className="dark:text-white text-[22px] font-semibold">
                {" "}
                Managment{" "}
              </h3>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                {" "}
                {managment}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
