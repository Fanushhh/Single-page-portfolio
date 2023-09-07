import { websiteData } from "../websiteData";

export const Projects = () => {
  return (
    <section className="px-4 lg:px-[165px] mb-[80px] sm:mb-[100px] lg:mb-[140px]">
      <div className="flex justify-between pb-10 items-center">
        <h1 className="text-[40px] leading-[48px] font-bold sm:text-[72px] sm:leading-[72px]">
          {websiteData.projects.title}
        </h1>
        <button className="pb-[10px] uppercase border-b-2 border-light-green text-base">
          {websiteData.projects.ctaButton}
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-6">
        {websiteData.projects.projects.map((project, index) => {
          return (
            <div className="mb-10 " key={index}>
              <div className="relative ">
                <img className="" src={project["img-small"]} alt="project image" />
                <div className="lg:hover:bg-black/50 transition-all duration-200 ease-in-out gap-4 opacity-0 lg:absolute w-full h-full m-0 hover:opacity-100 flex lg:justify-center lg:items-center lg:top-0 lg-left-0">
                  <a
                    href="#"
                    className="uppercase border-b-2 font-semibold border-light-green pb-[10px]"
                  >
                    {project.btn1}
                  </a>
                  <a
                    href="#"
                    className="uppercase border-b-2 font-semibold border-light-green pb-[10px]"
                  >
                    {project.btn2}
                  </a>
                </div>
              </div>
              <div>
                <p className=" text-heading-m mt-5 leading-m font-bold uppercase">
                  {project.title}
                </p>
                <div className="mt-[7px]">
                  {project.stack.map((stack, index) => {
                    return (
                      <span
                        className="uppercase m pr-4 text-light-grey"
                        key={index}
                      >
                        {stack}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-4 mt-5 lg:hidden">
                <a
                  href="#"
                  className="uppercase border-b-2 font-semibold border-light-green pb-[10px]"
                >
                  {project.btn1}
                </a>
                <a
                  href="#"
                  className="uppercase border-b-2 font-semibold border-light-green pb-[10px]"
                >
                  {project.btn2}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
