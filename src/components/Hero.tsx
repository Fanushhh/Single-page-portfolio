import { websiteData } from "../websiteData";

export const Hero = () => {
  return (
    <section className="w-full relative sm:bg-hero-img-tablet lg:bg-hero-img-desktop lg:bg-desktop-position bg-no-repeat bg-contain bg-right overflow-x-hidden px-4 sm:px-8 sm:before:content-[''] sm:before:w-[129px] sm:before:h-[129px] sm:before:absolute sm:before:bg-pattern-circle sm:before:bg-no-repeat sm:before:bottom-0 sm:before:right-[-70px] sm:after:content-[''] sm:after:w-[530px] sm:after:h-[129px] sm:after:absolute sm:after:bg-pattern-rings sm:after:bg-no-repeat sm:after:top-[90px] sm:after:left-[-340px] sm:after:z-[-1] lg:px-[165px] lg:before:right-[530px] lg:before:bottom-[60px]">
      <div className=" w-full flex flex-col items-center gap-5 h-[383px] bg-hero-img-mobile bg-top bg-no-repeat bg-contain sm:flex-row sm:justify-between sm:items-start sm:h-auto before:content-[''] before:w-[129px] before:h-[129px] before:absolute before:bg-pattern-circle before:bg-no-repeat before:bottom-0 before:right-[-80px] relative after:content-[''] after:w-[530px] after:h-[129px] after:absolute after:bg-pattern-rings after:bg-no-repeat after:top-1/3 after:left-[-340px] after:z-[-1] sm:before:content-none sm:after:content-none sm:bg-none sm:pt-8">
        <p className="text-heading-m leading-m font-bold sm:text-[32px]">
          {websiteData.heroSection.title}
        </p>
        <div className="flex gap-6">
          {websiteData.heroSection.logoArray.map((logo, index) => {
            return (
              <a href={logo.link} key={index} target="_blank">
                <img src={logo.img} alt="logo icon" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-center sm:w-full sm:max-w-[445px] lg:max-w-[706px] sm:text-left">
        <h1 className="text-[32px] tracking-[-1.14px] leading-9 mt-10 mb-6 sm:mb-16 sm:mt-[90px] lg:mt-[127px] font-bold sm:text-[62px] sm:tracking-[-2.05px] sm:leading-[62px]">
          Nice to meet you! I’m
          <span className="border-b-4 border-light-green">
            {" "}
            Fanush Mihailescu.
          </span>
        </h1>
        <p className="font-thin text-light-grey sm:text-body max-w-[445px] lg:mb-16">
          {websiteData.heroSection["sub-head"]}
        </p>
        <button className=" uppercase mt-6 tracking-[2.29px] border-b-2 border-light-green pb-2 lg:mb-[163px]">
          {websiteData.heroSection.ctaButton}
        </button>
      </div>
    </section>
  );
};
