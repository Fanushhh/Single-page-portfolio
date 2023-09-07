import { websiteData } from "../websiteData";

export const Experience = () => {
  return (
    <section className=" mb-0 px-4 overflow-hidden py-20 text-center relative after:content-[''] after:w-[530px] after:h-[129px] after:absolute after:bg-pattern-rings after:bg-no-repeat after:bottom-[15px] after:right-[-340px] after:z-10 sm:py-[60px] sm:px-8 lg:px-[165px] lg:pt-[104px] lg:pb-[140px] lg:after:right-[-200px] lg:flex lg:items-center lg:flex-col  lg:w-full">
        <hr className="mb-10 lg:mb-[72px] max-w-[1110px] w-full"/>
      <div className="sm:grid sm:grid-cols-2 sm:text-start lg:grid-cols-3 max-w-[1110px] w-full">
        {websiteData.experience.map((exp, index) => {
          return (
            <div key={index} className="mb-6">
              <p className="text-[32px] leading-10 font-bold sm:text-heading-l sm:leading-l">{exp.title}</p>
              <p className=" text-base text-light-grey sm:text-body sm:leading-body">{exp.years}</p>
            </div>
          );
        })}
      </div>
      <hr className="mt-10 sm:hidden max-w-[1110px] w-full"/>
    </section>
  );
};
