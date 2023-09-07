import { websiteData } from "../websiteData";

export const Experience = () => {
  return (
    <section className=" mb-0 px-4 overflow-hidden py-20 text-center relative after:content-[''] after:w-[530px] after:h-[129px] after:absolute after:bg-pattern-rings after:bg-no-repeat after:bottom-[15px] after:right-[-340px] after:z-10">
        <hr className="mb-10"/>
      {websiteData.experience.map((exp, index) => {
        return (
          <div key={index} className="mb-6">
            <p className="text-[32px] leading-10 font-bold">{exp.title}</p>
            <p className=" text-base text-light-grey">{exp.years}</p>
          </div>
        );
      })}
      <hr className="mt-10 sm:hidden"/>
    </section>
  );
};
