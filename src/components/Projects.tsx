import { websiteData } from "../websiteData";

export const Projects = () => {
  return (
    <section className="px-4">
      <div className="flex justify-between pb-10">
        <h1 className="text-[40px] leading-[48px] font-bold">
          {websiteData.projects.title}
        </h1>
        <button className="pb-[10px] uppercase border-b-2 border-light-green">
          {websiteData.projects.ctaButton}
        </button>
      </div>
      <div>
        {websiteData.projects.projects.map((project, index) => {
          return (
            <div className="mb-10" key={index}>
              <div className="">
                <img src={project["img-small"]} alt="project image" />
              </div>
              <div>
                <p className=" text-heading-m mt-5 leading-m font-bold uppercase">{project.title}</p>
                <div className="mt-[7px]">
                    {project.stack.map((stack, index) => {
                        return <span className="uppercase m pr-4 text-light-grey" key={index}>{stack}</span>
                    })}
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <button className="uppercase border-b-2 font-semibold border-light-green pb-[10px]">{project.btn1}</button>
                <button className="uppercase border-b-2 font-semibold border-light-green pb-[10px]">{project.btn2}</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
