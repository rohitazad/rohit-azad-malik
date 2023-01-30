import React from "react";
import { useSelector } from "react-redux";

const ResumePage = () => {
  const myCvData = useSelector((state) => state.userData.data);
  //console.log("resulem", myCvData);
  const experience = myCvData.experience;
  const education = myCvData.education;
  const knowledges = myCvData.knowledges;
  const working_skills = myCvData.working_skills;
  return (
    <>
      <div className="pt-12 md:py-12  sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-44">Resume </h2>
        <div className="grid grid-cols-1  gap-x-6 gap-y-6 mt-[30px]">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
              <h4 className="text-5xl dark:text-white font-medium">
                Experience
              </h4>
            </div>
            {experience.map((item, index) => {
                let oddNumber = index % 2 !== 0;
                let divClass = oddNumber ? 'py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2' : 'bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2';
              return (
                <div key={index+2} className={divClass}>
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    {item.dates}
                  </span>
                  <h3 className="text-xl dark:text-white"> {item.company} </h3>
                  <p className="dark:text-[#b7b7b7]">{item.job_title}</p>
                </div>
              );
            })}
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
              <h4 className="text-5xl dark:text-white font-medium">
                Education
              </h4>
            </div>
            {
                education.map((item,index)=>{
                    let oddNumber = index % 2 !== 0;
                    let divClass = oddNumber ? 'py-4 pl-5 bg-[#fff4f4] dark:bg-transparent pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2 mb-6' : 'bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2';
                    return (
                            <div key={index-1} className={divClass}>
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                                {item.dates}
                            </span>
                            <h3 className="text-xl dark:text-white"> {item.degree} </h3>
                            <p className="dark:text-[#b7b7b7]">
                                {item.school}
                            </p>
                            </div>
                    )
                })
            }
          </div>

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">Working Skills</h4>
                {
                        working_skills.map((item,index)=>{
                            return (
                                <div className="mb-5" key={item.title + index}>
                                    <div className="flex justify-between mb-1">
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                                        {item.title}
                                        </span>
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                                        {item.percent}
                                        </span>
                                    </div>
                                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                        <div className="bg-[#5185d4] h-1 rounded-full"></div>
                                    </div>
                                </div>
                            )
                        })
                    }
              </div>

              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">Knowledges</h4>
                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                    {
                        knowledges.map((item, index)=>{
                            return (
                                <button key={item+index} className="resume-btn">{item}</button>
                            )
                        })
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumePage;